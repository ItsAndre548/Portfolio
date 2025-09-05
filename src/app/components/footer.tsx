// components/Footer.tsx
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Nome */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-bold text-lg">André • Frontend Dev</h2>
          <p className="text-sm mt-1">
            Criando interfaces modernas e experiências digitais.
          </p>
        </div>

        {/* Links de navegação */}
        <ul className="flex space-x-6 text-sm">
          <li>
            <Link href="#skills" className="hover:text-purple-500 transition">
              Habilidades
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-purple-500 transition">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-purple-500 transition">
              Contato
            </Link>
          </li>
        </ul>

        {/* Redes sociais */}
        <div className="flex space-x-5">
          <Link
            href="https://github.com/ItsAndre548"
            target="_blank"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/itsandre548"
            target="_blank"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:andre548luiz@gmail.com"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </Link>
        </div>
      </div>

      {/* Créditos */}
      <div className="text-center text-xs text-gray-500 mt-6 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} André Carneiro. Todos os direitos reservados.
      </div>
    </footer>
  );
}
