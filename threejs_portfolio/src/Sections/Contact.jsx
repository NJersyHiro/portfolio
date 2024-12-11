import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.send(
                    'service_2g49ajj', 'template_9ufd9y',
                    {
                        from_name: form.name,
                        to_name: 'JavaScript Mastery',
                        from_email: form.email,
                        to_email: 'th1khse@gmail.com',
                        message: form.message,
                    },
                    'X3iKNU2c6ng4aHejT',
                )

            alert('メッセージを送信しました！')

        } catch (error) {
            setLoading(false);

            console.log(error);

            alert('メッセージが送信されませんでした!')

        }
    };

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen hidden xl:block" />

                <div className="contact-container">
                    <h3 className="head-text mt-10">Contact me</h3>
                    <p className="text-lg text-white-600 mt-3">
                        最後までご覧いただきありがとうございました。もしこのサイトや私についてのコメント、お仕事のご依頼等がありましたら、下記フォームをご利用ください。
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">お名前</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="山田　太郎"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">メールアドレス</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="yamadataro@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">内容</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="コメントや問い合わせ内容を入力してください。"
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? '送信中...' : '送信'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;