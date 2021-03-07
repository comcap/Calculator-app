import { ButtonGrid } from './buttonGrid.style'

const ButtonGridComponent = ({ onClick, onSubmit, onReset }) => {
  return (
    <ButtonGrid>
      <div onClick={() => onReset('Clean')} className='Clean'>
        C
      </div>
      <div onClick={() => onSubmit('Sum')} className='Sum'>
        =
      </div>
      <div onClick={() => onClick('Multiple')} className='Multiple'>
        X
      </div>
      <div onClick={() => onClick('Minus')} className='Minus'>
        -
      </div>
      <div onClick={() => onClick('Plus')} className='Plus'>
        +
      </div>
      <div onClick={() => onClick('Seven')} className='Seven'>
        7
      </div>
      <div onClick={() => onClick('Eight')} className='Eight'>
        8
      </div>
      <div onClick={() => onClick('Nine')} className='Nine'>
        9
      </div>
      <div onClick={() => onClick('Four')} className='Four'>
        4
      </div>
      <div onClick={() => onClick('Five')} className='Five'>
        5
      </div>
      <div onClick={() => onClick('Six')} className='Six'>
        6
      </div>
      <div onClick={() => onClick('One')} className='One'>
        1
      </div>
      <div onClick={() => onClick('Two')} className='Two'>
        2
      </div>
      <div onClick={() => onClick('Three')} className='Three'>
        3
      </div>
      <div onClick={() => onClick('Zero')} className='Zero'>
        0
      </div>
      <div onClick={() => onClick('Dot')} className='Dot'>
        .
      </div>
    </ButtonGrid>
  )
}

export default ButtonGridComponent
