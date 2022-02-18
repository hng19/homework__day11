// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.

// Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”
var str = ""
for (let i = 1; i <= 10; i++) {
    str += "a"
}
console.log(str)



// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

// Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”
var str = ""
for (let i = 1; i <= 10; i++) {
    if (i <= 9) {
        str += "a-"
    } else {
        str += "a"
    }
}
console.log(str)

// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.

// Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’
function repeatString(str, n) {
    let repeatStr = ""
    for (i = 1; i <= n; i++) {
        repeatStr = repeatStr + str
        if (i < n) {
            repeatStr = repeatStr + "-"
        }
    }
    return repeatStr
}
console.log(repeatString("a", 5))

// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
function sum() {
    let tong = 0
    for (let i = 0; i <= 100; i++) {
        if (i % 5 == 0) {
            tong = tong + i
        }
    } return tong
}
console.log(sum())


// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function r(a){
    let s=""
    if (a<0){
        return false
    } else {
            s=(4/3)*Math.PI*(r^3)
    }
    return s
}
console.log(r(5))
// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

// Note : Kết quả xuôi và ngược là như nhau

// Ví dụ :

// sum(3,8) = 22
// sum(8,3) = 22

function sum_(a, b) {
    let sum_ = 0
    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            sum_ = sum_ + i
        }
    } else {
        for (let i = a - 1; i > b; i--) {
            sum_ = sum_ + i
        }
    }return sum_
}
console.log(sum_(3, 8))
console.log(sum_(8, 3))


// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function kiemTraSoNguyenTo(a) {
    let turn = 0
    if (a < 2) {
        return false
    } else {
        for (let i = 1; i <= a; i++) {
            if (a % i == 0) {
                turn = turn + 1
            }
        }
    } if(turn==2){
        return true
    } else {
        return true
    }
}

console.log(kiemTraSoNguyenTo(2))

// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function kiemTraSoNguyen(a) {
    let turn = 0
    if (a < 0) {
        return false
    } else {
        for (let i = 2; i <= a; i++) {
            if (a % i == 0) {
                turn = turn + i
            }
        }
    }
    return a
}
console.log(kiemTraSoNguyen(2))





// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function tongUocChung(b) {
    let tong = 0;

    for (let i = 1; i < b; i++) {
        if (b % 1 == 0) {
            tong += 1
        }
        return tong
    }
}
console.log(tongUocChung(9))    
