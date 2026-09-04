import Link from "next/link"

export default function Footer(){

    return(

        <footer className="flex flex-col">

            <div className="flex bg-[#101828] pb-15 pt-15 items-center justify-center gap-5">

                <div className="flex flex-col w-130">
                    <h2 className="text-[#FF6900] text-3xl pb-2">
                        Sabor & Arte
                    </h2>
                    <p className="text-[#8D959F] w-120">
                        O melhor menu digital da região. Pratos artesanais feitos com paixão, ingredientes frescos e entrega rápida na sua mesa.
                    </p>
                </div>

                <div className="w-100">
                    <h2 className="text-[#FCFDFF] pb-3">
                        Navegação
                    </h2>

                    <div className="flex flex-col">

                        <Link href={"/"} className="text-[#9CB8B9]">Início</Link>

                        <Link href={"/cardapio/"} className="text-[#9CB8B9]">Cardápio Completo</Link>

                        <Link href={"/categorias/"} className="text-[#9CB8B9]">Categorias</Link>
                    
                    </div>

                </div>

                <div className="w-100">

                    <div>
                        <h2 className="text-[#EEF6FC] pb-2">
                            Funcionamento
                        </h2>
                        <p className="text-[#858A98] text-sm pb-2">
                            Terça a Domingo: 18h às 23h30
                        </p>
                        <p className="text-[#858A98] text-sm pb-3">
                            Atendimento local e Delivery
                        </p>
                    </div>
                    <hr className="border-[#858A98] pt-2"/>
                    <div>
                        <h3 className="flex flex-col text-[#555D6D] text-sm">        
                            Dúvidas ou Reservas?
                            <span className=" text-[#F56401] text-sm">
                                (47) 99999-9999
                            </span>
                        </h3>
                    </div>
                </div>
            </div>

            <hr className="border-[#192333]"/>
            <div className="flex bg-[#030712] p-4 items-center justify-center">
                <p className="text-[#52596B]">
                    © 2026 Sabor & Arte - Todos os direitos reservados.
                </p>
            </div>
        </footer>
        
    )


}