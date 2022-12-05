import React from 'react'


const ArticleCart = ({setIsActiveModal}) => {
    return (
        <article className='flex flex-col justify-center items-center gap-[20px] mb-[60px]'>

            <header className='w-full'>
                <h3 className='font-[500] text-[32px] text-[#1B5B45]'>Camisa florel</h3>
            </header>

            <div className='flex flex-col gap-[20px]'>

                <header className="w-[380px] h-[290px] bg-black"></header>

                <div className='bg-[#F4F0BB] w-[380px] h-[135px] rounded-[25px] flex flex-col justify-center'>
                    <ul className='m-[25px]'>
                        <li className='flex justify-between '>
                            <p className='font-[500] text-[20px] text-[#1B5B45]'>Talle: L</p>
                            <p className='font-[500] text-[20px] text-[#1B5B45]'>Precio: 17USD</p>
                        </li>
                        <li className='flex justify-between'>
                            <p className='font-[500] text-[20px] text-[#1B5B45]'>Color: Verde suave</p>
                        </li>
                        <li className='flex justify-between'>
                            <p className='font-[500] text-[20px] text-[#1B5B45]'>Cantidad: 1</p>
                            <button onClick={() => setIsActiveModal(true)} className='w-[155px] h-[35px] rounded-[8px] border-[#1B5B45] border-[2px] flex items-center justify-center hover:bg-[#1B5B45] text-[#1B5B45] hover:text-[#F4F0BB] duration-[0.2s]'>
                                <p className='font-[500] text-[20px] '>Deseleccionar</p>
                            </button>
                        </li>
                    </ul>
                </div>

            </div>


        </article>
    )
}

export default ArticleCart