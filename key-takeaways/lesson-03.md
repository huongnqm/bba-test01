# I. GIT
## 1. Undo actions
### Git Amend: `git commit -amend`
- Amend the most recent commit: edit message, insert/update file

- when should use:
    - incorrect commit message (typo, missing info, ...)
    - missing file 
    - redundant file
    - make a small change without creating extra commit

- Common cases:
    -
    1. Edit the last commit message:
            
             `git commit --amend -m"edited message"

    2. Forgot to include a file ( -> add specific file)

            git add fileName
            git commit --amend --no-edit
        **Note:**
        --no-edit: means keep the existing commit message

    3. Forgot to include some changes (-> add .)

            git add . 
            git commit --amend -m"edited message"

    4. Remove file 
    
            git reset HEAD~ --removedFileName.js
            git commit --amend --no-edit

**Important!!!**
-
Be careful <br>
- Not pushed yet → git commit --amend is usually fine <br>
- Already pushed/shared → just do this on private Branch, DONT force push to shared main/develop branch<br> 

`git commit --amend` changes the commit hash 
(old commit still exists reflog but not on Branch)
so updating the remote usually requires:

        git commit --amend --no-edit
        git push --force-with-lease


### Undo - File staging -> working director
    `git restore --staged <fileName>` -specific file
    `git restore --staged .` - all file

### Undo - File repository -> working director (un-commit)
    `git reset HEAD~1` - reset 1 commit
    `git reset HEAD~n` - reset n commit 

** NOTE: ** 
- the 1st commit cannot be reset
if you want to do: delete `.git` folder and run `git init` again

## 2. Branching model
- Get latest code from server:
    `git pull origin main`

- when running `git init` , GIT initializes (khởi tạo) the repository and creates the default branch (typically `main`)

- initialialize default branch
    `git config --global init.defaultBranch main`

- list branch (exists at least 1 value)
    `git branch`

- create new branch which is copied from original branch 
    `git branch <branchName>`

- switch to other
    `git checkout <branchName>`

- create new and switch to newly branch at the same time
    `git checkout -b <branchName>`

- delete branch
    `git branch - D <branchName>`

**NOTE** : Allway PULL CODE before creating new branch 

## 3. ignore file: 
- ` .gitignore` :file and folder are untracked by GIT
- #Comment
- ignore specific file: 
    scecret.txt
- ignore all files contains extension .log:
    *.log 
- ignore folder
    node_module/build 
- ignore file in sub-folder
    **/*.tmp 
- exception - dont ignore the file ( !)
    !important.txt
- ignore file in source folder
    /TODO
- ignore all txt files in .doc folder
    doc/**/*.txt


# II. JAVASCRIPT BASIC
## 1. Convention
- snake_case: not used for now
- kebab-case: file + folder
- camelCase: variable + function
- PascalCase: class

## 2. Console.log
- ' and "
- variable:
let myName = "Huong";
console.log (`Toi ten la ${myName}`);
console.log ('Toi ten la: ' + myName);

## 3. Object (key-value)
### 3.1. Declaration variable (Khai báo biến)
const/let <variableName> {
    key1: value1;
    key2: value2;
    ....
}
example:
let customer {
    "Id": 001,
    "nameCustomer": "Huong",
    "phoneNumber" : 0123456789,
    "isActive": true
}

const production {
    "name": "Lap Top",
    "manufacturer" : {
        "name": "Acer",
        "year": 2025
    }
}
### 3.2. Use variable with Console.log
- console.log(customer)
- console.log ('Ten khach hang la: ' + customer.nameCustomer)
- console.log(production.manufacturer.year)
- console.log(production["manufacturer"]["year"])

### 3.3. Const and Object
    const -> value cannot change
    e.g.:
        const a = 15
        a = 16 // error

    Const Object -> value cannot change (same const)
    e.g:
       const object = { "name": "Huong", "age": 18}
       object = {"name": Hoa, "age": 20} // error 

    HOWEVER, change properties of Object
    e.g:
       const object = { "name": "Huong", "age": 18}
       object.name = "Hoa" // Valid

### 3.4. Insert new properties into Object
Use .   OR []
    e.g.:
        let bike = {
            make : 'Yamaha',
            model: 'YUS-F3' 
        };
        bike.color = 'red';
        bike["price new"] = 100;
        console.log(bike)
        -> Result: {make: 'Yamaha',  model: 'YUS-F3' , color: 'red', 'price new': 100}
### 3.5 Delete a property of Object
    e.g:
    let employee = {
        name: 'Nguyen Van C',
        age: 18,
        department: 'HR'
    };
    delete employee.age;
    console.log(employee)
    result: {name: 'Nguyen Van C', age: 18}


## 4. Logical operator
- && : AND
- || : OR
- ! : NOT 
- ! = : Not equal to

## 5. Array
- Declaration, use
- Access value:
        - Index [0], [3], ..
        - length 
    example:
    `arr = [21, 24, 27, 29, 32]
    for  (let i = 0, i < arr.length, i++ ) {
        console.log(arr[i])
    }
- Insert value: PUSH 
    example:
    ` arr = [1,2]
    arr.push (3)
    console.log(arr)
    result: [1,2,3]

        
## 6. Function 
    function <functionName> {
        // code
        }
- return value
- parameter



