import emailjs from "emailjs-com";
import { useRef } from "react";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_29mw1lr",
        "template_mlkpw3d",
        form.current,
        "toOz-iBi19cJTRvpF"
      )
      .then(
        (result) => {
          alert("성공적으로 전송되었습니다!");
          form.current.reset();
        },
        (error) => {
          alert("전송 중 오류 발생!");
        }
      );
  };

  return (
    <div className="grid grid-cols-2">
      <div>내용</div>
      <div>
        <form ref={form} onSubmit={sendEmail} className="">
          <div>
            <input
              type="text"
              name="name" // ✅ 템플릿의 {{name}}과 일치
              placeholder="이름"
              required
              className="border p-2 w-[30rem]"
            />
          </div>
          <div>
            <input
              type="email"
              name="email" // ✅ 템플릿의 {{email}}과 일치
              placeholder="이메일"
              required
              className="border p-2 w-[30rem]"
            />
          </div>
          <div>
            <input
              type="text"
              name="title" // ✅ 템플릿의 {{title}}과 일치
              placeholder="제목"
              required
              className="border p-2 w-[30rem]"
            />
          </div>
          <div>
            <textarea
              name="message" // ✅ 템플릿의 {{message}}과 일치
              placeholder="내용"
              required
              className="border p-2 w-full h-40"
            />
          </div>
          <div>
            <input
              type="hidden"
              name="time" // ✅ 템플릿의 {{time}}에 대응 (자동 입력)
              value={new Date().toLocaleString()}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded cursor-pointer"
            >
              보내기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
