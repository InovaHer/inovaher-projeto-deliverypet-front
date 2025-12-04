import { TbBrandVercel } from 'react-icons/tb'
import { SiVite, SiAxios, SiReactrouter } from 'react-icons/si'

function Stacks() {
    return (
        <div className="flex flex-col gap-8 items-center justify-center py-6">

            <h1 className="text-2xl md:text-3xl font-bold text-slate-700">
                Tecnologias utilizadas para desenvolver o projeto
            </h1>

            {/* GRID QUE DIVIDE FRONT E BACK */}
            <div className="max-w-7xl w-full px-6 grid grid-cols-1 gap-12">

                {/* ================= BACKEND ================= */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-700 mb-12">
                        Backend
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-java-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">Java</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-spring-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">Spring Boot</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-swagger-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">Swagger</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-mysql-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">MySQL</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-postgresql-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">PostgreSQL</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-git-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">Git</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-github-original colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">GitHub</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-vscode-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">VS Code</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-docker-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">Docker</p>
                        </div>

                    </div>
                </div>

                {/* ================= FRONTEND ================= */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-slate-700 mb-12">
                        Frontend
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-javascript-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">JavaScript</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-typescript-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">TypeScript</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-html5-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">HTML</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-css3-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">CSS</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-nodejs-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">Node.js</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-react-original colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">React</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-git-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">Git</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-github-original colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">GitHub</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-vscode-plain colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">VS Code</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-tailwindcss-original colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">TailwindCSS</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <TbBrandVercel className="text-5xl text-black" />
                            <p className="text-slate-700 text-2xl font-semibold">Vercel</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <SiVite className="text-5xl text-purple-600" />
                            <p className="text-slate-700 text-2xl font-semibold">Vite</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <SiReactrouter className="text-5xl text-red-600" />
                            <p className="text-slate-700 text-2xl font-semibold">React Router</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <i className="devicon-react-original colored text-5xl"></i>
                            <p className="text-slate-700 text-2xl font-semibold">React Toastify</p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <SiAxios className="text-5xl text-blue-600" />
                            <p className="text-slate-700 text-2xl font-semibold">Axios</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}


export default Stacks