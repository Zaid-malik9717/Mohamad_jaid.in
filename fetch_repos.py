import urllib.request
import json
import re

url = 'https://api.github.com/users/zaid-malik9717/repos'
headers={'User-Agent': 'Mozilla/5.0'}
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        
    projects = []
    for i, repo in enumerate(data):
        name = repo['name']
        description = repo['description'] or ''
        html_url = repo['html_url']
        language = repo['language'] or 'Python'
        
        # Try to fetch README
        readme_url = f"https://raw.githubusercontent.com/zaid-malik9717/{name}/main/README.md"
        
        readme_content = ""
        try:
            req_rm = urllib.request.Request(readme_url, headers=headers)
            with urllib.request.urlopen(req_rm) as rm_response:
                readme_content = rm_response.read().decode('utf-8')
        except urllib.error.HTTPError as e:
            if e.code == 404:
                # Try master branch
                readme_url_master = f"https://raw.githubusercontent.com/zaid-malik9717/{name}/master/README.md"
                try:
                    req_rm = urllib.request.Request(readme_url_master, headers=headers)
                    with urllib.request.urlopen(req_rm) as rm_response_master:
                        readme_content = rm_response_master.read().decode('utf-8')
                except:
                    pass
        except Exception:
            pass
            
        # extract some tech stack or better description from README if description is empty or too short
        tech_stack = [language] if language else ["Python"]
        if "React" in readme_content: tech_stack.append("React")
        if "FastAPI" in readme_content: tech_stack.append("FastAPI")
        if "TensorFlow" in readme_content: tech_stack.append("TensorFlow")
        if "LLMs" in readme_content: tech_stack.append("LLMs")
        if "Streamlit" in readme_content: tech_stack.append("Streamlit")
        if "Pandas" in readme_content: tech_stack.append("Pandas")
        if "NumPy" in readme_content: tech_stack.append("NumPy")
        
        if len(description) < 10 and len(readme_content) > 10:
            # try to get the first paragraph
            paragraphs = readme_content.split('\n\n')
            for p in paragraphs:
                p = p.strip()
                if p and not p.startswith('#') and not p.startswith('!['):
                    description = p[:200] + '...' if len(p) > 200 else p
                    # remove markdown links if any
                    description = re.sub(r'\[([^\]]+)\]\([^\)]+\)', r'\1', description)
                    break

        if not description:
            description = f"Repository {name} on GitHub."

        projects.append({
            "id": i + 1,
            "title": name.replace('-', ' ').title(),
            "description": description.replace("\"", "'").replace("\n", " "),
            "year": 2024,
            "tech_stack": list(set(tech_stack)),
            "github_url": html_url,
            "live_url": "",
            "thumbnail_url": "",
            "is_featured": i < 3  # feature first 3
        })
        
    # convert to JS array
    js_output = "[\n"
    for p in projects:
        js_output += f"  {{\n"
        js_output += f"    id: {p['id']},\n"
        js_output += f"    title: \"{p['title']}\",\n"
        js_output += f"    description: \"{p['description']}\",\n"
        js_output += f"    year: {p['year']},\n"
        js_output += f"    tech_stack: {json.dumps(p['tech_stack'])},\n"
        js_output += f"    github_url: \"{p['github_url']}\",\n"
        js_output += f"    live_url: \"\",\n"
        js_output += f"    thumbnail_url: \"\",\n"
        js_output += f"    is_featured: {'true' if p['is_featured'] else 'false'}\n"
        js_output += f"  }},\n"
    js_output += "]"
    
    with open('repos_output.txt', 'w', encoding='utf-8') as f:
        f.write(js_output)
    print("Success. Saved to repos_output.txt")
except Exception as e:
    import traceback
    traceback.print_exc()

