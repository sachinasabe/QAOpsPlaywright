# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBasics.spec.js >> @Web Browser Context  playwright test
- Location: tests\UIBasics.spec.js:4:1

# Error details

```
Test timeout of 60000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - link "Free Access to InterviewQues/ResumeAssistance/Material" [ref=e3] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/documents-request
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e4] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - generic [ref=e5]:
    - heading [level=3] [ref=e6]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - text: "Username:"
        - textbox "Username:" [ref=e16]
      - generic [ref=e17]:
        - text: "Password:"
        - textbox "Password:" [ref=e18]
      - generic [ref=e20]:
        - generic [ref=e21] [cursor=pointer]:
          - text: Admin
          - radio "Admin" [checked] [ref=e22]
        - generic [ref=e24] [cursor=pointer]:
          - text: User
          - radio "User" [ref=e25]
      - combobox [ref=e28]:
        - option "Student" [selected]
        - option "Teacher"
        - option "Consultant"
      - generic [ref=e29]:
        - generic [ref=e30]:
          - checkbox "I Agree to the terms and conditions" [ref=e32]
          - generic [ref=e33]:
            - text: I Agree to the
            - link "terms and conditions" [ref=e34] [cursor=pointer]:
              - /url: "#"
        - button "Sign In" [ref=e35]
      - paragraph [ref=e37]:
        - text: (username is
        - generic [ref=e38]: rahulshettyacademy
        - text: and Password is
        - generic [ref=e39]: Learning@830$3mK2
        - text: )
  - generic [ref=e42]:
    - paragraph [ref=e44]: You will be limited to only fewer functionalities of the app. Proceed?
    - generic [ref=e45]:
      - button "Cancel" [ref=e46]
      - button "Okay" [active] [ref=e47]
```