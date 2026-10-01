# Step 1: Download 
    - git
    - VS
    - github

# Step2: 	Mở terminal or gitBash:	
Câu lệnh Git:		
	Trước khi làm việc với Git, cần một số cấu hình mặc định:	
	● Config username (tên người dùng):	
	○ git config –global user.name “<tên bạn>”	
	● Config email (địa chỉ email):	
	○ git config –global user.email “<email của bạn>”	
	● Config branch default (nhánh mặc định):	
	○ git config –global init.defaultBranch main	
# Step3: 		
	Mở VS code	
	"Add extention: Playwright - tick xanh
    Installl"	
	"Sau đó chọn Gitbash là default
    Ctrl Shift P -> Terminal default -> Gitbash"	
		
# Step4:	Đưa code lên gitHub	
	Xác thực = SSH Key (xưa dùng username/pass)	
	Git                 ----->   Xác thực.                            --->   Github   
	Private key	
	id_rsa	
	(bí mật)	         SSH keys                                       Public key 
		                lưu ở ~/.ssh                                    id_rsa.pub
		                ~ đại diện cho thư mục home

# Step5:	Generate key:	
	ssh-keygen -t rsa -b 4096 -C “your_email@example.com”	
	tạo xong ssh thì lấy ssh	
	Lấy nội dung ssh key: cat ~/.ssh/id_rsa.pub	
	Truy cập: https://github.com/settings/ssh/new  để thêm ssh key	
    
# Step6:	Install playwright	
	"- Vào folder tạo dự án 
- Chuột Phải -> mở terminal "	
	npm init playwright@latest	
		
# Step7: 	đưa code lên github - tạo repo	
	Khởi tạo repo local: git init	
	Liên kết repository vừa tạo với Git: git remote add origin <ssh_link>	
	Thêm code: git add .	
	Thêm commit: git commit -m”init project”	
	Push code: git push origin main	