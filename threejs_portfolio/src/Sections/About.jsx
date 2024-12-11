import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(' th1khse@gmail.com');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">異色のエンジニア</p>
                            <p className="grid-subtext">
                                自動車工場で検査員としてバリバリ体を動かしていたが、生成AIの可能性に惹かれて29歳でIT業界に転職
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">開発、いいよね</p>
                            <p className="grid-subtext">
                                IT業界に転職したばかりの頃は最初からバリバリ開発はさせてもらえなかった。でもSESで開発とインフラ両方を経験し、開発の楽しさに気づけた。
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 35, lng: 140, text: 'ここにいます', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">旅行が好き（ほぼ過去形）</p>
                            <p className="grid-subtext">アメリカ、韓国に2年間ずつ住んでいたこともあるトリリンガルなエンジニア。海外に一人でバックパッカーに行ったりするほど旅行が好きだが、最近はもっぱらスキルを伸ばしたい思いが強い</p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">資格を取りすぎた</p>
                            <p className="grid-subtext">
                                IT業界での経験が浅いうちはとにかく勉強しようと思い資格を取りまくっていた。会社から報奨金が出て知識も増えるので一石二鳥と思ってそれはそれで良かったが、この3Dポートフォリオなど、自分でなにか作るほうがよっぽどいい経験になった。（気にする必要のないほどのお金は欲しい🤫 ）
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />

                        <div className="space-y-2 text-center">
                            <p className="grid-subtext text-center font-noto">詳しくは以下</p>
                            <a href="/assets/resume.pdf" download="resume.pdf" className="inline-block">
                                <Button name="レジュメをダウンロード" isBeam containerClass="w-full"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;