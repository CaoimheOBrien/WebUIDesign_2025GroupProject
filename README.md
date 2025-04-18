# WebUIDesign_2025GroupProject
This is the repository for our group project.

## Members: 
- Caoimhe O'Brien (C00297178)
- Lee Lindsay (C00300670)
- Aoife Leahy (C00296873)
- Natalia Ryl (C00294480) 

# 🧾 Project Title and Summary
### 1. Name:
Sage Academy
  
### 2. Purpose:
The main purpose of our website is to be used as an educational tool to be used by college students and their lecturers, using our websites intuitive quizzes and learning resources to get a greater grasp on their education.​
   
### 3. Audience:
University Students; Lecturers; Administrators

### 4. Live Site:
[Link to GitHub Pages deployment]

# 🧠 Design Rationale
### 5. Why did you choose this theme/topic?
- With our website, we wanted to create an app which focuses on enhancing student experience while also giving educators a platform to communicate and assess their students. 
- Our website integrates interactive features to allow for resource sharing. This space fosters a dynamic and supportive learning environment, ensuring students receive the resources that they need to succeed.


### 6. Key design goals and user needs identified:
Design Goals:
- Sign in/Sign out 
- Create quiz/ manage quizzes 
- Take quiz 
- Multiple modules 
- Learning resources 
- Track academic progress

User Needs:
- Provide both college students and lecturers a chance at improved learning opportunities
- Easy access to students’ progress in quizzes and marks for lectures
- Enables the users to access different pages depending on if the user used the staff sign in or the student sign in
- Simple set up for lecturers to setup their own notes to be accessed in the learning resource section 
- Intuitive access to quizzes for students and lectures

  
### 7. Brief summary of research insights or personas used:
We created 4 User Personas to represent different demographics of potential users, we had; ​ 
- a lecturer in their mid-40s who is not familiar with newer technologies, ​
- a student who is a first-time user of the website, ​
- a young lecturer who suffers from a lack of engagement from students, ​
- a university administrator who often finds it difficult to find and utilise the necessary tools as educational interfaces often cater towards students or educators. ​

# 🔧 Key Features
### 8. List core pages:
Main Homepage; Student Homepage; Staff Homepage;


### 9. Highlight dynamic or interactive elements:
- Navigation buttons
- Interactive & responsive navigation bar (burger menu when screen is smaller)
- Forms
- Search bar
- Add topic/
- Add module
- Back buttons for each selection
- Interactive quizzes


### 10. Note responsiveness and accessibility efforts (e.g. mobile layout, alt text, colour contrast)
- All images have an alt text.
- As the screen gets smaller, the navigation bar turns into a burger menu
- Buttons which were horizontally stacked become vertically stacked
- Module navigation bar, which is vertical and on side of page, gets stacked horizonatlly at the top of page
- Logo and name moves to middle of header for visual purposes
- Module selection modal displays underneath the navigation bar instead of on its right

# 🛠️ Technologies Used
11. Svelte.js
12. HTML/CSS/JS
13. Penpot - design wireframes, sitemaps, user flows
14. Github - stores our repository
15. Warp - used some help for responsiveness
16. ChatGPT - used to create content for quizzes & student names

# 👥 Team Contributions
### 17. Each member should write a short reflection:

#### Caoimhe O'Brien (CaoimheOBrien):

**Main contributions:**
- Contact Page:
	i. Created the ContactCard component
	ii. All this page was completed by me, except for header/ navigation layout.
- Staff Sign-in 
	i. All this page was completed by me, except for header/ navigation layout.
- Student Sign-in
	i. All this page was completed by me, except for header/ navigation layout.
- Staff Quiz
	i. Styled and created the content for each of the quizzes.
	ii. Implemented button functionality.
- Student Quiz
	i. Styled and created the content for each of the quizzes.
	ii. Implemented button functionality.
	iii. Implemented the user feedback. 
- ModuleStore.js
	i. I created all the quiz content and answers.
- Live page deployment
  i. I handled everything to do with the deployment. 

**Challenges faced and how they were solved:**
- **Required Form Fields*: At first I found it hard to create required form fields that were functional. This is because I just used the "required" element. To fix this, I added the "bind:value" element to each of the input elements. 

-**Questions on Quizzes*: Originally, we wanted to have a different page for each of the questions but then we realised that would take up either too many if statements or too many pages. To fix this, I reviewed our designs and decided to make all of our questions on the same page. 

**What was learned or improved during the process:**
- I learned how to create interactive forms. 
- I deepened my understanding of conditional formatting and dynamic pages/ elements in javascript. 
- I learned how to utilise svelteKit and similar modern javascript frameworks.
- I can also now deploy js projects through GitHub. 

#### Natalia Ryl (NataliaRyl):

**Main contributions:**

All responsiveness was done by me.

Created 'Back' buttons for all pages.

- Footer.svelte: 
  1. Basic layout was from the svelte tutorial. 
  2. Remaining code was all me.
- Header.svelte: 
  1. Basic layout was from the svelte tutorial. 
  2. Remaining code was all me.
- Navigation.svelte: 
  1. Basic layout was from the svelte tutorial. 
  2. Remaining code was all me.
- moduleStore.js: 
  1. This file was fully created by me with the help of Libor. 
  2. The rest just added proper written content to it.
- about: 
  1. This file was fully created by me.
- staff_class_info: 
  1. Added a functional navigation bar. 
  2. Created the modal pop up  that displays the search bar. 
  3. Created a functional 'Add Module' option.
- staff_lr:
  1. Added a functional navigation bar. 
  2. Created the modal pop up that displays topics and content. 
  3. Created a functional 'Add Topic' option.
- student_lr:
  1. Added a functional navigation bar. 
  2. Created the modal pop up that displays topics and content.

**Challenges faced and how they were solved:**
- The biggest challenge I had were with adding new topics/modules. 
  I had no idea where to start, but thanks to Libor's help I was able to make that option fully functional.

- I also didn't know how to approach our module/topic selection.
  Again thanks to Libor's help, I knew where to go and how to do it.

**What was learned or improved during the process:**
- I learned how to style websites for responsiveness.
- I now know how to make an interactive mavigation bar that has selections from each part. 
  Eg, each module had its own topic which had its own content.
- I know how to have a functional 'Add' button.


#### Aoife Leahy (AoifeLeahy):

**Main contributions:**
  - Staff_class_info:
    1. Search bar.
    2. Navigation bar styling.
  - Student_quiz:
    1. All the page layout was completed by me, except implementing button functionality and the actual quizzes.
  - Student_lr:
    1. Navigation bar styling.
    2. Researched topics and its content and implemented them into each module.
  - Staff_home_page:
    1. All this page was completed by me, except implementing button functionality.
  - Staff_quiz:
    1. All the page layout was completed by me, except implementing button functionality and the actual quizzes.
  - Staff_lr:
    1. Navigation bar styling.
    2. Researched topics and its content and implemented them into each module.
  - moduleStore.js
    1. Wrote all the modules, topics and content.
    
**Challenges faced and how they were solved:**
- The display of names in the class info page proved difficult. This is because I tried to make them a separate js file first as I thought it would be easier to display all of them at once and to style all of them together.

- To fix this, I researched online an easier way to display them. I then changed the name to a string instead of a separate js file.

**What was learned or improved during the process:**
- I know how sveltekit works.
- I learned how to insert a search bar and make it display only when I wanted to.
- I gained more knowledge on inserting images, as I learned how to put an image into a button component.
- My styling improved, as I styled lots of things in the website such as the navigation bar, etc.
- My understanding of how to use svelte improved also.

#### Lee Lindsay (LeeLindsaySetu / Solomiya-Datskiv (for some reason this happens all the time)):

**Main contributions:**

**Challenges faced and how they were solved:**

**What was learned or improved during the process:**


# 🚀 Deployment Notes
### 15. GitHub Pages URL
https://caoimheobrien.github.io/WebUIDesign_2025GroupProject/ 

### 16. Any deployment issues and how they were resolved
The main issues with deployment was to do with the routing and working through GitHub. At first, I used the wrong quotation marks for the {base} element but I didn't realise so I askedd my lecturer for assitance and they corrected one page so I could do the rest.

I also had to deal with issues with git merges and git pulls/pushes. Originally the page wouldn't deploy due to issues in the build which then affected the git bash. I fixed these issues and tried to push but it didn't work. I had to work through git merge issues and consult my lecturer's notes. 

# 🔄 Reflections & Next Steps
### 17. What went well in the project
Our teamwork and time management was very good when completing this assignemnt/website. 
The majority of the group worked well together as we could easily split up each of the pages between all of us without any coflict. 
If we had any problems with some aspects of the website, we were all very happy to help each other and give some feedback.
Our team worked together to make sure the website had consistent styling and layout.


### 18. What could be improved
The biggest takeaway from this project is the importance of not overloading the project with difficult features. 
Focusing on key features help to maintain quality and avoids any of the team members becoming overwhelmed.
Another important takeaway would be clear communication and well-defined goals. 

### 19. One suggestion for future development
If we were to do this project again, I think we would make our goals more realistic with the features that we wish to include. ​
Since we are not utilising databases, some of the features that some of the more complex features we originally planned were not feasible without the necessary backend infrastructure. ​
By scaling down our feature set and focusing on the core functionality, we could ensure a realistic and more polished final product. ​
