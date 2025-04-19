import emailjs from "@emailjs/browser";

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
          console.log("✅ EmailJS 응답 결과:", result);
          alert("성공적으로 전송되었습니다!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ EmailJS 오류:", error);
          alert("전송 중 오류 발생!");
        }
      );
  };

  return (
    <section className="w-full h-screen bg-orange-300 flex items-center justify-center text-black text-4xl font-bold">
      <div className="grid grid-cols-2">
        <div>내용</div>
        <div>
          <form ref={form} onSubmit={sendEmail} className="">
            <div>
              <input
                type="text"
                name="name"
                placeholder="이름"
                required
                className="border p-2 w-[30rem] mb-3"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="이메일"
                required
                className="border p-2 w-[30rem] mb-3"
              />
            </div>
            <div>
              <input
                type="text"
                name="title"
                placeholder="제목"
                required
                className="border p-2 w-[30rem] mb-3"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="내용"
                required
                className="border p-2 w-full h-70 mb-3 resize-none"
              />
            </div>
            <div>
              <input
                type="hidden"
                name="time"
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
    </section>
  );
}

export default ContactForm;
