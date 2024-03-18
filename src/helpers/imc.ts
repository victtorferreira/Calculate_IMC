 export type Level = {
    title: string;
    color: string;
    icon: 'up' | 'down';
    imc: number[]
    youtImc?: number
}

export const levels: Level[] = [
    {title: 'Magreza', color: '#97a2ac', icon: 'down', imc: [0, 18.5]},
    {title: 'Normal', color: '#0fac69', icon: 'up', imc: [18.6, 24.9]},
    {title: 'Sobrepeso', color: '#E3AF3B', icon: 'down', imc: [25, 30]},
    {title: 'Obesidade', color: '#C44141', icon: 'down', imc: [30, 99]}
]

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height * height);
    for( let i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
            let levelsCopy = {...levels[i]};
            levelsCopy.youtImc = parseFloat(imc.toFixed(2))

            return levelsCopy;

        }
    }

    return null;
}