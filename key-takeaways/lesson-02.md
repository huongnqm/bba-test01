  # Lesson-02: GIT and Javascript basic
  ## I. Version control system:
    - view history
    - restore version

    Type:
    - Local
    - Centralized 
    - Distributed (most popular) -> GIT

  ## II. GIT
  ### 1. GIT STATUS
  **State**: 3 
  - Working directory: new file or modified file
  - Staging area:   prepare commit
  - Repository: commit

  **Terminal**:   

  Do only 1 time
  - `git init` : initialization 
  - `git remote add origin <url>`: create GitHub repo and link to Local repo
  once change

  Do when changing
  - `git add .` : insert file into staging
      - dot: stages all new, modified, and deleted files ...
      - specific file
      - folder/filename

    - cd.. :move out of folder

  - `git commit -m"message"` : commit
  - `git push origin main` : push code

 ### 2. GIT Config
  **Apply to all repo**
  - `git config --global user.name "entered Name"`
  - `git config --global user.mail "entered mail"`

  **Separate repo** (go to Terminal of repo/folder)
  - `git config user.name "entered Name"`
  - `git config user.mail "entered Mail"`

  ### 3. GIT status & Log
  - `git status`:
    - green: staging
    - red: working directory
  - `git log`
  - Quit: Q

  ### 4. GIT - Commit conventiom
  ***< Type >: < Short_description >***
  - Type: type of commit
      - chore: small change
      - feat: new feature, new testcases,...
      - fix: fix bug

# III. JAVASCRIPT BASIC
## 1. hello World!
`console.log("Hello world!");`
OR
`console.log('Hello world')`

How to run:
- node fileName 
- node url  

## 2. Comment
  - single line: 
    // comment
  - multi lines:
    /*
      code
    */
    - hotkey: ctrl/command + / 

## 3. Varible  - Constant
### a. Varible
*** <var/let> < name of Varible > =   < value> ***
Shoud use: let

### b. Const
*** <const> < name of Constant > =   < value> ***

## 4. Data type
### a. Primitive types (nguyên thủy)
- Number (int, float, double)
    e.g.:
    - const age = 25
    - const price = 18,99
    - const infinity = Infinity // vô hạn 
    - const notANumber = NaN 
- String
- Boolean 
- Undefined
- null 
- symbol
- bigInt
### b. Reference types (tham chiếu)
- object  

***NOTE*** :
`typeof < varible>`

## 5. Comparison operators
return: true/false

a. == OR === (equal to)
  - loose equality: ==  (coercion)
      5 = "5" // true
  - trick equality: === (should use)
      5 = "5" // false

b. ! (not equal to)

c. > (greater than)

d. >= (greater than or equal to)

e. < (less than)

f. <= (less than or equal to)

## 6. logic Operators:
a.  && (AND)

b. || (OR) 

## 7. Unary - one operand 
a. Prefix:
increase first, return later

    - let a = 10
      b = ++ a // a = 11 -> b= 11 

b. Postfix:
return first, increase later

    - let a = 10
      b = a ++ // b=10, a =11

### 8. math Operators:
plus: +
minus: -
times: * 
division: /

**additional**:
  - chia dư (%): trả về phần dư của phép tính chia
    3%3=0 (3:3 dư 0)
    3%2=1 (3:2 dư 1)
    3%1=0 (3:1 dư 0)
    100%80=20(100:80 dư 20)

      - Ứng dụng tìm chẵn-lẻ  
      lẻ: x%2 === 1
      chẵn: x%2 === 0
     

### 9. Condition:
- if
- if ... else
- if ... else if ... else
- switch ... case 

    example:

      let hour = 8
      if (hour > 8 && hour <= 11) {
        console.log("Good morning!");
      }
### 10. Loops 
- for (i)
- for (of)
- for (each)
- for (in)
- while
- do ... while

      for (<initialization>, <loop condition>, <update>) {
        // code block to be excuted
      }

      - (1) initialization: điều kiện khởi tạo, chạy 1 lần duy nhất khi bắt đầu
      - (2) loop condition: đúng thì chạy tiếp, sai thì dừng
      - (3) update: chạy cuối vòng lặp để thay đổi giá trị biến

      (1) -> (2) -> (3) -> (2) -> (3) -> (2) -> (3) ....

  example: 

      for (let i = 0, i < 5, i ++) {
        console.log("xin chao");
      }
    Result: Xin chao x 5

### 11. Format Code
  Win: Alt + Shift + F
  Mac: Option + Shift + F    
    







