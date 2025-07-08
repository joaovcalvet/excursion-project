import { TopPart } from "./top-part/component";

export function Header() {
    return (
        <header>
            <TopPart />

            <nav>
                <img src="#" alt="excursion logo" />
                <ul>
                    <li><a href="#">IDIOMA</a></li>
                    <li><a href="#">CARRINHO</a></li>
                    <li><a href="#">AJUDA</a></li>
                    <li><a href="#">LOGIN</a></li>
                    <li><a href="#">CRIAR CONTA</a></li>
                </ul>
            </nav>
        </header>
    )
}