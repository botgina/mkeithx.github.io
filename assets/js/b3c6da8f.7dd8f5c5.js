"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4974],{1407:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=i(4848),s=i(8453);const t={id:"python-minis",title:"Python Minis",description:"Small-scale Python applications"},a="Overview",o={id:"guides/python-starters/samples/python-minis",title:"Python Minis",description:"Small-scale Python applications",source:"@site/docs/guides/python-starters/samples/01-py-examples.mdx",sourceDirName:"guides/python-starters/samples",slug:"/guides/python-starters/samples/python-minis",permalink:"/docs/guides/python-starters/samples/python-minis",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:171256621e4,sidebarPosition:1,frontMatter:{id:"python-minis",title:"Python Minis",description:"Small-scale Python applications"},sidebar:"mySidebar",previous:{title:"Examples",permalink:"/docs/python-starters/samples"},next:{title:"Docusaurus - Quick start",permalink:"/docs/docusaurus-quickstart"}},l={},c=[{value:"What&#39;s inside",id:"whats-inside",level:2},{value:"Tryout",id:"tryout",level:2},{value:"Fibonacci",id:"fibonacci",level:3},{value:"Bmi Calculator",id:"bmi-calculator",level:3},{value:"Caesar cipher",id:"caesar-cipher",level:3},{value:"Password Generator",id:"password-generator",level:3},{value:"Video Downloader",id:"video-downloader",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"Small-scale Python applications for beginners who are curious and for advanced users looking for refreshers and fundamentals."}),"\n",(0,r.jsx)(n.h2,{id:"whats-inside",children:"What's inside"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Title"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#fibonacci",children:"Fibonacci sequence generator"})}),(0,r.jsx)(n.td,{children:"Generates sequence of numbers, in which every term in the sequence is the sum of terms before it."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#bmi-calculator",children:"BMI Calculator"})}),(0,r.jsx)(n.td,{children:"Determines whether you're Normal, Overweight or Obese."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#caesar-cipher",children:"Caesar Cipher"})}),(0,r.jsx)(n.td,{children:"Encrypt or Decrypt messeges using Caesar Cipher Algorithm."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#password-generator",children:"Password Generator"})}),(0,r.jsx)(n.td,{children:"Generates random passwords with three complexity levels."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"#video-downloader",children:"Video downloader"})}),(0,r.jsx)(n.td,{children:"Simple Video Downloader."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"tryout",children:"Tryout"}),"\n",(0,r.jsx)(n.h3,{id:"fibonacci",children:"Fibonacci"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Sample Code"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'import os\n\nclass Fibonacci:\n    def __init__(self) -> None:\n        self.sequence = [0, 1]\n\n    def get(self, index: int):\n        """\n        Get Fibonacci sequence up to the specified index.\n\n        >>> Fibonacci().get(10)\n        [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]\n        >>> Fibonacci().get(5)\n        [0, 1, 1, 2, 3]\n        """\n        difference = index - len(self.sequence) + 2\n        if difference > 0:\n            self.sequence.extend(self.sequence[-1] + self.sequence[-2] for _ in range(difference))\n        return self.sequence[:index]\n\ndef clear_console():\n    os.system(\'cls\' if os.name == \'nt\' else \'clear\')\n\ndef main():\n    clear_console()\n    app_name = "Fibonacci Sequence Generator"\n    msg = "(To exit, enter \'exit\' or press Ctrl-C)"\n    print(f\'{"-" * 48}\\n{" " * 10}{app_name}\\n{" " * 5}{msg}{" " * 12}\\n{"-" * 48}\')\n\n    fibonacci = Fibonacci()\n\n    while True:\n        print()\n        prompt = input(">> ").lower()\n\n        if prompt in {"exit", "quit"}:\n            break\n\n        try:\n            index = int(prompt)\n        except ValueError:\n            print("Enter a number or \'exit\'")\n            continue\n\n        print(*fibonacci.get(index), sep=\', \')\n\nif __name__ == "__main__":\n    main()\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"bmi-calculator",children:"Bmi Calculator"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Sample Code"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"import os\nimport sys\n\ndef get_float_input(prompt):\n    while True:\n        try:\n            value = float(input(prompt))\n            return value\n        except ValueError:\n            print('Invalid input. Please enter a valid number.\\n')\n\ndef calculate_bmi():\n    height = get_float_input('Your height in meters (ex. 1.73): ')\n    weight = get_float_input('Your weight in kilograms (ex. 75): ')\n\n    bmi = weight / (height ** 2)\n    bmi = round(bmi, 2)\n\n    normal_bmi_range = 'Normal BMI is from 18.50 to 24.90.'\n\n    if bmi < 18.5:\n        classification = 'SEVERELY UNDERWEIGHT'\n    elif 18.5 <= bmi <= 24.9:\n        classification = 'NORMAL'\n    elif 25 <= bmi <= 29.9:\n        classification = 'OVERWEIGHT'\n    elif 30 <= bmi <= 34.9:\n        classification = 'SEVERELY OVERWEIGHT'\n    elif 35 <= bmi <= 39.9:\n        classification = 'OBESE'\n    else:\n        classification = 'SEVERELY OBESE'\n\n    print(f'\\nYour BODY MASS INDEX is {bmi:0.2f} and classified as {classification}.')\n    \n    if 18.5 <= bmi <= 24.9:\n        print(normal_bmi_range)\n\ndef main():\n    os.system('cls' if os.name == 'nt' else 'clear')\n    app_name = 'BMI Calculator'\n    print(f'{\"-\" * 40}\\n{\" \" * 8}{app_name}{\" \" * 8}\\n{\"-\" * 40}')\n    calculate_bmi()\n\n    while True:\n        response = input('\\nDo you want to continue? (Y/N) ')\n        if response.lower() == 'y':\n            main()\n        elif response.lower() == 'n':\n            print('\\nThank you and have a great day.\\n')\n            sys.exit()\n        else:\n            print('\\nError: Please select Y or N.\\n')\n\nif __name__ == '__main__':\n    main()\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"caesar-cipher",children:"Caesar cipher"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Sample Code"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"import os\nimport sys\n\ndef caesar_cipher(message, shift, encrypt=True):\n    result = ''\n    for char in message:\n        if char.isalpha():\n            ascii_offset = ord('A') if char.isupper() else ord('a')\n            if encrypt:\n                shifted_char = chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)\n            else:\n                shifted_char = chr((ord(char) - ascii_offset - shift) % 26 + ascii_offset)\n            result += shifted_char\n        else:\n            result += char\n    return result\n\ndef user_input():\n    choice = input('Encrypt [E] or Decrypt [D]: ').upper()\n    if choice == 'E':\n        plain_message = input('Message you want to encrypt: ')\n        shift = int(input('Enter shift value (1-25): '))\n        encrypted_message = caesar_cipher(plain_message, shift)\n        print('\\nYour encrypted message: ', encrypted_message)\n    elif choice == 'D':\n        encrypted_message = input('Message you want to decrypt: ')\n        shift = int(input('Enter shift value (1-25): '))\n        decrypted_message = caesar_cipher(encrypted_message, shift, encrypt=False)\n        print('\\nYour decrypted message: ', decrypted_message)\n    else:\n        print('\\nInvalid choice. Please select either Encrypt (E) or Decrypt (D).\\n')\n        user_input()\n\ndef main():\n    os.system('cls' if os.name == 'nt' else 'clear')\n    app_name = 'Caesar Cipher'\n    print(f'{\"-\" * 48}\\n{\" \" * 14}{app_name}{\" \" * 14}\\n{\"-\" * 48}')\n    user_input()\n\n    while True:\n        print('\\nEncrypt/Decrypt another message? (Y/N): ', end='')\n        check = input()\n        if check == 'y' or check == 'Y':\n            main()\n        elif check == 'n' or check == 'N':\n            print('\\nThanks for using the tool. Have a great day!\\n')\n            sys.exit()\n        else:\n            print('\\nPlease select Y or N.')\n            continue\n\nif __name__ == '__main__':\n    main()\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"password-generator",children:"Password Generator"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Sample Code"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"import os\nimport sys\nimport random\nimport string\n\ndef generate_password(complexity,length):\n    while True:\n        \n        if complexity == '1': # weak\n            characters = string.ascii_letters\n        elif complexity == '2': # medium\n            characters = string.ascii_letters + string.digits\n        elif complexity == '3': # strong\n            characters = string.ascii_letters + string.digits + string.punctuation\n        elif complexity == '4':\n            print('\\nThank you and have a great day!\\n')\n            sys.exit()\n        else:\n            \n            print('\\nError: Invalid Choice.')\n            break\n\n        password = ''.join(random.choice(characters) for _ in range(length))\n        return password\n\ndef user_input():\n    while True:\n        try:\n            length = int(input(\"\\nEnter password length (min. 8 max. 64): \"))\n            break\n        except ValueError:\n            print('\\nError: Password length must be a number.\\n')\n            return\n    \n    if length <= 7 or length >= 65:\n        print('\\nError: Invalid range.\\n')\n        return\n\n    print(\"Select complexity level:\")\n    print(\"[1] Weak\")\n    print(\"[2] Medium\")\n    print(\"[3] Strong\")\n    print(\"[4] Quit\")\n    choice_complexity = input('Your choice: ')\n    \n    if choice_complexity not in (\"1\",\"2\",\"3\",\"4\"):\n        pass\n        \n    password = generate_password(length=length, complexity=choice_complexity)\n    if password is None:\n        print('')\n    else:\n        print('\\nYour password is:',(password))\n        print()\n\ndef main():\n    os.system('cls' if os.name == 'nt' else 'clear')\n    app_name = 'Password Generator'\n    print(f'{\"-\" * 48}\\n{\" \" * 12}{app_name}{\" \" * 12}\\n{\"-\" * 48}')\n    user_input()\n\n    while True:\n        response = input('Do you want to continue? (Y/N) ')\n        if response == 'y' or response == 'Y':\n            main()\n        elif response == 'n' or response == 'N':\n            print('\\nThank you and have a great day!\\n')\n            sys.exit()\n        else:\n            print('\\nError: Please select Y or N.\\n')\n            continue\n\nif __name__ == '__main__':\n    main()\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"video-downloader",children:"Video Downloader"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Sample Code"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"import os\nimport sys\nimport re\nimport yt_dlp\n\ndef video_downloader():\n    url_pattern = re.compile(r'^https?://[^\\s/$.?#].[^\\s]*$')\n\n    while True:\n        video_url = input(\"Video URL: \")\n\n        if url_pattern.match(video_url):\n            break\n        else:\n            print('\\nError: Invalid URL Format')\n\n    try:\n        os.makedirs('downloads', exist_ok=True)\n    except OSError:\n        print(\"Error creating the 'downloads' directory.\")\n        sys.exit()\n\n    ydl_opts = {'outtmpl': 'downloads/' + '%(title)s.%(ext)s'}\n\n    with yt_dlp.YoutubeDL(ydl_opts) as ydl:\n        ydl.download([video_url])\n\ndef main():\n    os.system('cls' if os.name == 'nt' else 'clear')\n    app_name = 'Video Downloader'\n    print(f'{\"-\" * 48}\\n{\" \" * 12}{app_name}{\" \" * 12}\\n{\"-\" * 48}')\n    video_downloader()\n\n    while True:\n        response = input('\\nDo you want to continue? (Y/N) ')\n        if response.lower() == 'y':\n            main()\n        elif response.lower() == 'n':\n            print('\\nThank you and have a great day.\\n')\n            sys.exit()\n        else:\n            print('\\nError: Please select Y or N.\\n')\n\nif __name__ == '__main__':\n    main()\n\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(6540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);