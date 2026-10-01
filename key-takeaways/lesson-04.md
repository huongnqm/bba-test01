# I. Scope of a variable (Phạm vi của biến) - 3
- Block Scope (Khối)
- Function Scope (Hàm)
- Global (Toàn cục)

## 1. Block Scope
- Block Scope: Biến được khai báo trong {}
    -- var: không bị giới hạn bởi {}
    -- let/const: bị giới hạn bởi {}, nếu gọi ngoài {} sẽ undefined

e.g:.
if (true) {
    var varVariable = "var không có block scope";
    let letVariable = "let có block scope";
    const constVariable = "const có block scope"
}
console.log (varVariable); //OK - var không bị giới hạn bởi block
console.log (letVariable); // Error - letVariable is not defined 
console.log (constVariable) // Error - constVariable is not defined 

## 2. Function Scope:
- Function scope: Biến đươc khai báo trong 1 hàm
    -- var/let/const nằm ngoài hàm sẽ undifined
    e.g:.
    function myFunction () {
        var functionScoped = "Chỉ có thể truy cập trong hàm này";
        let alsoFunctionScope = "Tương tự";
        console.log (functionScoped) // OK
    }
   console.log (alsoFunctionScope) // Error: alsoFunctionScope is not underfined

### 3. Global:
    -- Global: biến được khai báo ở 1 dòng code tự do, không nằm trong khối or hàm
    e.g:
    var globalVar = "Tôi là biến toàn cục";
    let globalLet = "Tôi cũng là biến toàn cục";
    function testFunction () {
        console.log (globalVar); //Truy cập được
        console.log (globalLet); //Truy cập được
    }

# II. Javascript - break and continue 
## 1. Break
    -- `Break` dùng để thoát HOÀN TOÀN khỏi vòng lặp ngay lặp tức
    e.g: 
    Tìm phần tử đầu tiên
    const numbers = [1, 3, 8, 7, 9, 11]
    let firstEven = null;
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (num % 2 === 0) {
            firstEven = num 
            break; // dừng ngay khi tìm thấy
        }
        console.log (`So ${num} khong phải so chan`);
    }
        console.log (`So chan dau tien la: ${firstEven}`);

## 2. Continue
    -- `Continue` : bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang vòng lặp tiếp theo
    e.g1: 
    for (let i = 0; i <= 10; i++){
        if (i % 2 === 0) {
            continue; // Bỏ qua số chẵn
        }
        console.log(i);
    }

    e.g2:
    const scores = [85, 92, 78, 96, 60, 99, 77, 60];
    for (let i = 0; i < scores.length; i++) {
        const score = scores[i];
        if (score < 80) {    
            continue; // bỏ qua score < 80
        }
        console.log(score);
    }

# III Javascript - Câu điều kiện nâng cao
## 1. if ... else
    -- if ... else: thực thi code khác nhau cho trường hợp true/false
    e.g:
    let score = 75  ;
    if (score >= 60) {
        console.log("Bạn đã qua môn");  
    }
    else {
        console.log("Bạn cần học lại");
    }

## 2. if ... else ... if
    -- if ... else ... if: kiểm tra nhiều điều kiện theo thứ tự
    e.g:
    let score = 85;
    if (score > 90) {
        console.log ("Xuất sắc");
    } else if (score > 80) {
        console.log ("Giỏi");
    } else if (score > 70) {
        console.log("Khá");
    } else if (score > 60) {
        console.log("Trung Bình");
    } else {
         console.log("Yếu");
    }    

### 3. Ternary Operator (Toán tử điều kiện)
    -- cách viết ngắn gọn cho if ... else
    e.g1: 
    let age = 20;
    let status = (age >= 18) ? "Người lớn" : "Trẻ Em";
    console.log (status);

    Có thể lồng nhau
    e.g2:
    let score = 75;
    let grade = score >= 90 ? "A" :
                score >= 80 ? "B" :
                score >= 70 ? "C" :
                score >= 60 ? "D" : "F";

# IV JavaScript - Vòng lặp nâng cao
## 1. for ... in loop 
    -- Dùng để duyệt qua các thuộc tính (properties) của một object 
    for (let key in object)

    e.g:
    const person = {
        name: "John",
        age: 36,
        city: "DaNang"
    };
    for (let key in person) {
        console.log(key + ":" + person[key]);
    }

## 2. forEach method 
    -- method của Array để thực thi 1 func cho mỗi phần tử. Không thể dùng `break` hoặc `contine`  -> lỗi illegal 

    e.g:
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach(function(value){
        console.log(value);
    } )

# V. JavaScript - Utils function
    -- Utils = Utilities (tiện ích) 
        - String Utils
        - Array Utils 
## 1. String Utils
    - trim: bỏ khoảng trắng
    - toUpperCase, toLowerCase: chuyển đổi Hoa và thường
    - includes: check CHUỖI có hàm con ko: trả về true or false  
    - spit: cắt chuỗi: trả về chuỗi
    - replace: thay thế chuỗi con = chuỗi con khác ("thay cái này", "bằng cái này")
### a. trim
    -- trim()
    -- trimStart()
    -- trimEnd()

    e.g:
    let text = "  Hello World.  "
    console.log(text.trim());
    console.log(text.trimStart());
    console.log(text.trimEnd());        
### b. toUpperCase, toLowerCase
    e.g:
    str = "JavaScript";
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());

### c. includes
    e.g:
   let text = "Hello World";
   console.log(text.includes("World")); //True
   console.log(text.includes("world")); //false

### d. split
    e.g1.:
    let text = "Hello World Javascript";
    console.log(text.split(" "));  
    //['Hello', 'World', 'Javascript']
    //0: "Hello"
    //1: "World"
    //2: "Javascript"
    //length: 3

    e.g2:
    let text = "rosenguyen@gmail.com";
    console.log(text.split("@"))
    // ['rosenguyen', 'gmail.com']
### e. Replace
    -- replace("old", "new")
    e.g:
    let text = "Hello World";
    console.log(text.replace("World", "JavaScript"))
    // -> Hello JavaScript


reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

## 2. Arrray Utils
    -- THÊM phần từ vào mảng: push, unshift, splice
    -- XÓA phần tử khoải mảng: pop, shift, splice
    -- TÌM KIẾM: find, filter
    -- BIẾN ĐỔI mảng: map
    -- SẮP XẾP mảng

### THÊM
    -- push(<phần tử>): THÊM vào CUỐI
    -- unshift(<phần tử>): THÊM vào ĐẦU
    -- splice(<Vị trí>, <số phần tử cần xóa>, <phần tử cần thêm vào>): THÊM vào GIỮA
    e.g.:
    let arr = [1, 2, 3]
    arr.push(4); // [1, 2, 3, 4]
    console.log(arr);
    arr.unshift(0); // [0, 1, 2, 3,4]
    console.log(arr);
    arr.splice(2,0,1.5) // [0, 1, 1.5, 2, 3,4]
    console.log(arr);

### XÓA
    -- pop(): XÓA ở CUỐI
    -- shift(): XÓA ở đầu
    -- splice(<Vị trí>, <số phần tử cần xóa>): XÓA vị trí BẤT KÌ
    e.g:
    let arr = [1, 2, 3, 4, 5];
    arr.pop();
    console.log(arr); // [1, 2, 3, 4]
    arr.shift();
    console.log(arr); //[2, 3, 4]
    arr.splice(1,2);
    console.log(arr); //[2]

### TÌM KIẾM
    -- find(): trả về phần tử đầu tiên hợp lệ và dừng luôn
    -- filter(): trả về tất cả các phần tử hợp lệ

    e.g:
    const numbers = [5, 12, 8, 130, 40];
    let first = numbers.find(num => num > 10);
    console.log(first);
    let all = numbers.filter(num => num > 10);
    console.log(all)

### BIẾN ĐỔI MẢNG
    -- Tạo mảng mới = cách áp dụng 1 hàm lên từng phần tử của mảng -> trả về mảng mới với cùng độ dài
    e.g:
    const numbers = [1, 2, 3, 4, 5];
    let doubled = numbers.map(num => num*2);
    console.log(doubled); //[2, 4, 6, 8, 10]

### SẮP XẾP MẢNG
    -- sort(a, b): sắp xếp lại mảng theo thứ tự ASC or DESC
        => a - b
           So sánh từng cặp phần tử a và b
           ÂM (a - b < 0): a ĐỨNG TRƯỚC b
           DƯƠNG (a - b > 0): a ĐỨNG SAU b
           0 : GIỮ NGUYÊN thứ tự

    e.g: 
    let numbers = [40, 100, 5, 10, 25, 3];    
    numbers.sort((a,b) => a - b); 
    console.log(numbers); // bé đến lớn
    numbers.sort((a, b) => b - a);
    console.log(numbers); // lớn đến bé
    
     

