<div align="center">

# $${\color{blue} {MongoDB \space Tutorial}}$$

</div>
               
## $${\color{red} Image 1: Add \space Connection}$$ <br>
### Open MongoDB Compass → Click “Add new connection”.
![1.png](./Outputs/1.png)

## $${\color{red} Image 2: Enter \space Address}$$ <br>
### Type mongodb://localhost:27017/ → Click “Save & Connect”.
![2.png](./Outputs/2.png)

## $${\color{red} Image 3: Connected \space to \space Server}$$ <br>
### Connected successfully → Click “+” to make a database.
![3.png](./Outputs/3.png)

## $${\color{red} Image 4: Create \space Database}$$ <br>
### Type unidb as database name, students as collection name → Click "Create Database".
![4.png](./Outputs/4.png)

## $${\color{red} Image 5: View \space Collection}$$ <br>
### See students collection → Click "Open MongoDB shell".
![5.png](./Outputs/5.png)

## $${\color{red} Image 6: Basic \space Shell \space Commands}$$ <br>
### 1. use unidb → Go to unidb database  
### 2. show databases → List all databases  
### 3. show collections → List collections inside a database  
### 4. use local → Switch to local database  
### 5. use unidb → Go back to unidb  
![6.png](./Outputs/6.png)

## $${\color{red} Image 7: Add \space Data}$$ <br>
### Click "ADD DATA" to put documents inside students collection.
![7.png](./Outputs/7.png)

## $${\color{red} Image 8: Insert \space a \space New \space Document}$$ <br>
### Click "Insert document" to add one student manually.
![8.png](./Outputs/8.png)

## $${\color{red} Image 9: Insert \space Document \space Window}$$ <br>
### Screen appears → Ready to type student details.
![9.png](./Outputs/9.png)

## $${\color{red} Image 10: Fix \space Document \space Error}$$ <br>
### If mistake → Click "Format Document" to fix structure.
![10.png](./Outputs/10.png)

## $${\color{red} Image 11: Save \space Correct \space Document}$$ <br>
### Document corrected → Click "Insert" to save.
![11.png](./Outputs/11.png)

## $${\color{red} Image 12: Document \space Added}$$ <br>
### First student record is saved successfully.
![12.png](./Outputs/12.png)

## $${\color{red} Image 13: Clone \space Existing \space Document}$$ <br>
### Click Clone icon to copy an existing student.
![13.png](./Outputs/13.png)

## $${\color{red} Image 14: Insert \space Cloned \space Document}$$ <br>
### Edit the cloned student → Click "Insert".
![14.png](./Outputs/14.png)

## $${\color{red} Image 15: Two \space Documents \space Shown}$$ <br>
### Now you have 2 students in the collection.
![15.png](./Outputs/15.png)

## $${\color{red} Image 16: Shell \space and \space Copy \space Options}$$ <br>
### 1. Open MongoDB shell → Write commands.  
### 2. Copy to clipboard → Copy document quickly.
![16.png](./Outputs/16.png)

## $${\color{red} Image 17: InsertOne \space Command}$$ <br>
## Used insertOne() command in shell → Added one more student. 
db.students.insertOne({ <br>
  "regno": "2021ICT120",<br>
  "name": "Pathum",<br>
  "age": 25,<br>
  "degree": "ICT",<br>
  "gpa": 3.2,<br>
  "skills": [<br>
    "JS",<br>
    "MongoDB",<br>
    "Java",<br>
    "C"<br>
  ]<br>
}<br>
)<br>
![17.png](./Outputs/17.png)

## $${\color{red} Image 18: Refresh \space to \space See \space Changes}$$ <br>
### Click refresh → New student appears.
![18.png](./Outputs/18.png)

## $${\color{red} Image 19: Edit \space Existing \space Document}$$ <br>
### Click "Edit" to update student's information.
![19.png](./Outputs/19.png)

## $${\color{red} Image 20: Add \space New \space Field}$$ <br>
### Add a new field after age (example: gender).
![20.png](./Outputs/20.png)

## $${\color{red} Image 21: Gender \space Field \space Added}$$ <br>
### Field gender: "Male" added to student.
![21.png](./Outputs/21.png)

## $${\color{red} Image 22: Changes \space Saved}$$ <br>
### Changes saved → New field visible.
![22.png](./Outputs/22.png)

## $${\color{red} Image 23: InsertMany \space Command}$$ <br>
### Used insertMany() in shell → Added multiple students together.
db.students.insertMany(<br>
[<br>
{<br>
  "regno": "2021ICT10",<br>
  "name": "Amal",<br>
  "age": 22,<br>
  "degree": "ÏCT",<br>
  "gpa": 2.9,<br>
  "skills": [<br>
    "JS",<br>
    "MongoDB",<br>
    "Java",<br>
    "C"<br>
  ],<br>
  "gender": "Male"<br>
},<br>
{<br>
  "regno": "2021ICT10",<br>
  "name": "Kamala",<br>
  "age": 24,<br>
  "degree": "ÏCT",<br>
  "gpa": 3.1,<br>
  "skills": [<br>
    "JS",<br>
    "MongoDB",<br>
    "Java",<br>
    "C#"<br>
  ],<br>
  "gender": "Female"<br>
}<br>
]<br>
)<br>
![23-1.png](./Outputs/23-1.png)
![23-2.png](./Outputs/23-2.png)

## $${\color{red} Image 24: View \space Students}$$ <br>
### All students shown inside students collection.
![24-1.png](./Outputs/24-1.png)
![24-2.png](./Outputs/24-2.png)

## $${\color{red} Image 25: Use \space Options \space Button}$$ <br>
### Click "Options" to filter, sort, or project data.
![25.png](./Outputs/25.png)

## $${\color{red} Image 26: Set \space Query \space Options}$$ <br>
### Options available: Project, Sort, Collation, Skip, Limit.
![26.png](./Outputs/26.png)

## $${\color{red} Image 27: Project \space Only \space Name \space and \space Age}$$ <br>
### Set projection → {name:1, age:1} → Click "Find".<br>
{name:1, age:1}
![27.png](./Outputs/27.png)

## $${\color{red} Image 28: Only \space Name \space and \space Age \space Shown}$$ <br>
### Result shows only name and age fields.
![28-1.png](./Outputs/28-1.png)
![28-2.png](./Outputs/28-2.png)

## $${\color{red} Image 29: Project \space without \space _id}$$ <br>
### Set projection → {name:1, age:1, _id:0} → Hide _id field.<br>
{name:1, age:1, _id:0}
![29.png](./Outputs/29.png)

## $${\color{red} Image 30: Result: \space Only \space Name \space and \space Age}$$ <br>
### See only name and age without _id.
![30.png](./Outputs/30.png)

## $${\color{red} Image 31: Reset \space Query}$$ <br>
### Click "Reset" to remove projection.
![31.png](./Outputs/31.png)

## $${\color{red} Image 32: Show \space All \space Fields}$$ <br>
### See all fields (no filter applied).
![32-1.png](./Outputs/32-1.png)
![32-2.png](./Outputs/32-2.png)
![32-3.png](./Outputs/32-3.png)

## $${\color{red} Image 33: Filter \space One \space Student}$$ <br>
### Find a specific student by setting a condition.<br>
{regno:”2021ICT114”}
![33.png](./Outputs/33.png)

## $${\color{red} Image 34: Filter \space by \space Gender}$$ <br>
### Find students by gender field.<br>
{gender:”Male”}
![34.png](./Outputs/34.png)

## $${\color{red} Image 35: Find \space Females}$$ <br>
### Find only students with gender: "Female".<br>
{gender:”Female”}
![35-1.png](./Outputs/35-1.png)
![35-2.png](./Outputs/35-2.png)
![35-3.png](./Outputs/35-3.png)

## $${\color{red} Image 36: Shell \space Find \space Females}$$ <br>
### Shell command to find female students.<br>
db.students.find({ gender: "Female" })
![36.png](./Outputs/36.png)

## $${\color{red} Image 37: Shell \space Find \space Males}$$ <br>
### Shell command to find male students.<br>
db.students.findOne({ gender: "Male" })
![37-1.png](./Outputs/37-1.png)
![37-2.png](./Outputs/37-2.png)

## $${\color{red} Image 38: Find \space Students \space Older \space Than \space 22}$$ <br>
### Find students where age > 22.<br>
{ age: { $gt: 22 } }
![38.png](./Outputs/38.png)

## $${\color{red} Image 39: List \space Students >22}$$ <br>
### Example: Students aged 23 and 25.<br>
db.students.find({ age: { $gt: 22 } })
![39-1.png](./Outputs/39-1.png)
![39-2.png](./Outputs/39-2.png)

## $${\color{red} Image 40: Find \space Students \space Younger \space Than \space 23}$$ <br>
### Find students where age < 23.<br>
{age:{$lt:23}}
![40.png](./Outputs/40.png)

## $${\color{red} Image 41: Students <23 \space Years \space Old}$$ <br>
### List of students younger than 23.<br>
db.students.find({ age: { $lt: 23 } })
![41.png](./Outputs/41.png)

## $${\color{red} Image 42: Find \space Students \space Aged \space 23}$$ <br>
### Find students where age = 23.<br>
{age:{$eq:23}}
![42.png](./Outputs/42.png)

## $${\color{red} Image 43: Shell \space Find \space Age \space 23}$$ <br>
### Shell command → Find students aged 23.<br>
db.students.find({ age: { $eq: 23 } })
![43.png](./Outputs/43.png)

## $${\color{red} Image 44: Find \space Students \space Skilled \space in \space "JS"}$$ <br>
### Find students who know "JS".<br>
{ skills: "JS" }
![44.png](./Outputs/44.png)

## $${\color{red} Image 45: Shell \space Find \space "JS" \space Skill}$$ <br>
### Shell command → Find students with "JS" skill.<br>
db.students.find({ skills: "JS" })
![45-1.png](./Outputs/451.png)
![45-2.png](./Outputs/45-2.png)

## $${\color{red} Image 46: Find \space Students \space Skilled \space in \space "C"}$$ <br>
### Find students who know "C".<br>
{ skills: {$in:["C"]} }
![46.png](./Outputs/46.png)

## $${\color{red} Image 47: Exclude \space "C" \space Skill}$$ <br>
### Find students who don't know "C".<br>
{skills:{$nin:[“C”]}}
![47.png](./Outputs/47.png)

## $${\color{red} Image 48: Find \space Skills \space "C" \space or \space "C"}$$ <br>
### Find students who know "C" or "C#".<br>
{ skills: {$in:["C"],[“C#”]} }
![48.png](./Outputs/48.png)

## $${\color{red} Image 49: Sort \space by \space GPA \space Low \space to \space High}$$ <br>
### Sort students by GPA ascending (low to high).<br>
{gpa:1}
![49.png](./Outputs/49.png)

## $${\color{red} Image 50: Find \space ICT \space Students \space Sorted \space by \space GPA}$$ <br>
### Find ICT students → GPA sorted ascending.<br>
db.students.find({ degree: "ICT" }).sort({ gpa: 1 })
![50-1.png](./Outputs/50-1.png)
![50-2.png](./Outputs/50-2.png)
![50-3.png](./Outputs/50-3.png)

## $${\color{red} Image 51: Sort \space by \space GPA \space High \space to \space Low}$$ <br>
### Sort students by GPA descending (highest to lowest).<br>
{gpa:-1}
![51.png](./Outputs/51.png)

## $${\color{red} Image 52: ICT \space Students \space Sorted \space High \space to \space Low}$$ <br>
### Find ICT students → GPA highest first.<br>
db.students.find({ degree: "ICT" }).sort({ gpa: -1 })
![52-1.png](./Outputs/52-1.png)
![52-2.png](./Outputs/52-2.png)
![52-3.png](./Outputs/52-3.png)

## $${\color{red} Image 53: Male \space Students \space Sorted \space by \space GPA}$$ <br>
### Find gender:"Male" students → Sort GPA ascending.<br>
{gender:”Male”} <br>
{gpa:1}
![53.png](./Outputs/53.png)

## $${\color{red} Image 54: ICT \space + \space Male \space Students \space by \space GPA}$$ <br>
### Find students who are both ICT and Male → Sort GPA ascending.<br>
db.students.find({ degree: "ICT", gender: "Male" }).sort({ gpa: 1 })
![54-1.png](./Outputs/54-1.png)
![54-2.png](./Outputs/54-2.png)

## $${\color{red} Image 55: Find \space All \space Students + \space Sort \space by \space GPA}$$ <br>
### Find all students → Sort GPA from lowest to highest.<br>
db.students.find().sort({ gpa: 1 })
![55-1.png](./Outputs/55-1.png)
![55-2.png](./Outputs/55-2.png)
![55-3.png](./Outputs/55-3.png)

## $${\color{red} Image 56: Find \space All \space Students}$$ <br>
### Find all students → No limit or skip applied → Display all documents.<br>
{name: 1 , regno: 1 , _id: 0}<br>
{gpa: 1}
![56.png](./Outputs/56.png)

## $${\color{red} Image 57: Find \space Limited \space Students}$$ <br>
### Find students → Limit result to 3 students → Show only first 3 documents.<br>
{name:1 , regno:1 , _id:0}<br>
{name:1}
![57.png](./Outputs/57.png)

## $${\color{red} Image 58: Find \space Students \space with \space Skip \space and \space Limit}$$ <br>
### Skip 1 student → Then find next 3 students → Display 3 documents after skipping the first one.<br>
{name:1 , regno:1 , _id:0}<br>
{name:1}
![58.png](./Outputs/58.png)
