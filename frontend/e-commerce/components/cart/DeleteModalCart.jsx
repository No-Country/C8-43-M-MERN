import React from 'react'

const DeleteModalCart = ({setIsActiveModal}) => {
  return (
    <div className='w-[380px] h-[200px] rounded-[15px] bg-[#1B5B45] shadow-[0_4px_10px_0_rgba(242,206,113,0.24)] flex flex-col items-center justify-start'>
      <header className='my-[35px]'>
        <p className='text-center text-[16px] font-[500] text-white'>¿Estas segur@ de sacar este producto de <br /> tu carrito de compras?</p>
      </header>
      <footer className='flex gap-[45px]'>
        <button onClick={() => setIsActiveModal(false)} className='text-[16px] font-[500] text-[#F4F0BB]'>Volver atrás</button>
        <button className='w-[160px] h-[35px] rounded-[10px] border-[2px] border-[#F2CE71] text-[16px] font-[500] text-[#F4F0BB] border'>Estoy segur@</button>
      </footer>
    </div>
  )
}

export default DeleteModalCart