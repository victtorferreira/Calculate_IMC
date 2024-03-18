import { useState } from "react"
import styles from "./app.module.css"
import poweredImage from "./assets/powered.png"
import leftArrowImage from "./assets/leftarrow.png"
import {levels, calculateImc, Level} from "./helpers/imc"
import { GridItem } from "./GridItem/GridItem"


const App = () => {

  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField))
      
    } else {
      alert('Digite todos os campos')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setWeightField(0);
    setHeightField(0);
  }
    return(
      <div className={styles.main}>
        <header>
          <div className={styles.headerContainer}>
            <img src={poweredImage} alt="" width={150}/>
          </div>
        </header>
        <div className={styles.container}>
          <div className={styles.rightSide}>
            <h1>Calculadora de IMC</h1>
            <p>IMC é a sigla para Ìndice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>


            <input 
              type="number"
              placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
              value={heightField > 0 ? heightField:''}
              onChange={e => setHeightField(parseFloat(e.target.value))}
              disabled={toShow ? true : false}
            />

            <input 
              type="number"
              placeholder="Digite a seu peso. Ex: 60.4 (em kg)"
              value={weightField > 0 ? weightField:''}
              onChange={e => setWeightField(parseFloat(e.target.value))}
              disabled={toShow ? true : false}
            />

            <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>
          </div>

          <div className={styles.leftSide}>
            {!toShow && 
              <div className={styles.grid}>
                {levels.map((item, key) => (
                  <GridItem key={key} item={item}/>
                ))}
              </div>
            }
            {toShow && 
              <div className={styles.bigItem}>
                  <div className={styles.rightArrow} onClick={handleBackButton}>
                    <img src={leftArrowImage} alt="" width={25} />
                  </div>
                  <GridItem item={toShow}/>
              </div>
            
            }
          </div>
        </div>
      </div>
    )
}

export default App;