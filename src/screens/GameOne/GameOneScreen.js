import React, {useState, useRef, useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView, Image, View} from 'react-native';
// import * as Students from '../../redux/actions/Students';

import {
  LIGHT_YELLOW_COLOR,
  WHITE_COLOR,
  DARK_FONT_COLOR,
  BACKGROUND_COLOR,
} from '../../assets/styles';
import {Button} from '../../components';
import SessionFinishedScreen from '../SessionFinished/SessionFinishedScreen';
import GameOneInstructions from '../Instructions/GameOneInstructions';

//import {generateLevelsGameOne} from '../../utils/Misc';

import RedFlower from '../../assets/images/Rick.png';
import GreenFlower from '../../assets/images/Rick2.png';
import Bird from '../../assets/images/Morty.png';

// Constantes del juego
const DELAY_PER_LEVEL = 1000; // Segundos por nivel (1000ms = 1 segundo)
// const TRAINING_LEVELS = 5;
// const LEVELS = 5; // Cantidad de niveles = 2 minutos => 120 niveles  (1 x segundo)
const GAME_MAP = {
  training: [1, 0, 2, 0, 3, 0, 4, 0, 1, 0, 2, 0, 3, 0, 4],
  normal: [1, 0, 2, 0, 3, 0, 4, 0, 1, 0, 2, 0, 3, 0, 4],
  inverted: [4, 0, 1, 0, 2, 0, 3, 0, 4, 1, 0, 2, 0, 3, 0],
  /*normal: [
    3,
    0,
    4,
    0,
    3,
    0,
    4,
    0,
    2,
    0,
    1,
    0,
    2,
    0,
    1,
    0,
    4,
    0,
    1,
    0,
    1,
    0,
    3,
    0,
    2,
    0,
    2,
    0,
    2,
    0,
    3,
    0,
    1,
    0,
    4,
    0,
    2,
    0,
    1,
    0,
    2,
    0,
    2,
    0,
    2,
    0,
    4,
    0,
    3,
    0,
    1,
    0,
    1,
    0,
    3,
    0,
    2,
    0,
    2,
    0,
    1,
    0,
    3,
    0,
    2,
    0,
    3,
    0,
    3,
    0,
    2,
    0,
    4,
    0,
    4,
    0,
    3,
    0,
    4,
    0,
    1,
    0,
    3,
    0,
    3,
    0,
    3,
    0,
    3,
    0,
    1,
    0,
    3,
    0,
    4,
    0,
    2,
    0,
    4,
    0,
    4,
    0,
    4,
    0,
    1,
    0,
    4,
    0,
    3,
    0,
    3,
    0,
    4,
    0,
    3,
    0,
    3,
    0,
    4,
    0,
    2,
    0,
    3,
    0,
    2,
    0,
    3,
    0,
    2,
    0,
    3,
    0,
    1,
    0,
    2,
    0,
    3,
    0,
    2,
    0,
    4,
    0,
    1,
    0,
    4,
    0,
    1,
    0,
    2,
    0,
    2,
    0,
    4,
    0,
    2,
    0,
    1,
    0,
    1,
    0,
    3,
    0,
    3,
    0,
    3,
    0,
    1,
    0,
    3,
    0,
    2,
    0,
    2,
    0,
    1,
    0,
    2,
    0,
    4,
    0,
    2,
    0,
    1,
    0,
    1,
    0,
    2,
    0,
    4,
    0,
    4,
    0,
    2,
    0,
    4,
    0,
    2,
    0,
    3,
    0,
    3,
    0,
    1,
    0,
    4,
    0,
    3,
    0,
    2,
    0,
    2,
    0,
    2,
    0,
    3,
    0,
    3,
    0,
    4,
    0,
    1,
    0,
    4,
    0,
    2,
    0,
    2,
    0,
    4,
    0,
    2,
    0,
    2,
    0,
    1,
    0,
    1,
    0,
    2,
    0,
    3,
    0,
    4,
    0,
    1,
    0,
    1,
    0,
    2,
    0,
    1,
    0,
    1,
    0,
    3,
    0,
    4,
    0,
    1,
    0,
    1,
    0,
    4,
    0,
    4,
    0,
    3,
    0,
    3,
    0,
    1,
    0,
    1,
    0,
    4,
    0,
    4,
    0,
    4,
    0,
    2,
    0,
    3,
    0,
    3,
    0,
    1,
    0,
    2,
    0,
    1,
    0,
    4,
    0,
    1,
    0,
    3,
    0,
    3,
    0,
    1,
    0,
    2,
    0,
    4,
    0,
    4,
    0,
    4,
  ],
  inverted: [
    4,
    0,
    1,
    0,
    2,
    0,
    3,
    0,
    2,
    0,
    3,
    0,
    2,
    0,
    1,
    0,
    1,
    0,
    3,
    0,
    1,
    0,
    2,
    0,
    4,
    0,
    2,
    0,
    2,
    0,
    1,
    0,
    3,
    0,
    1,
    0,
    4,
    0,
    1,
    0,
    2,
    0,
    4,
    0,
    3,
    0,
    1,
    0,
    2,
    0,
    1,
    0,
    2,
    0,
    1,
    0,
    3,
    0,
    4,
    0,
    1,
    0,
    1,
    0,
    2,
    0,
    1,
    0,
    1,
    0,
    4,
    0,
    3,
    0,
    1,
    0,
    1,
    0,
    4,
    0,
    3,
    0,
    1,
    0,
    3,
    0,
    3,
    0,
    2,
    0,
    4,
    0,
    3,
    0,
    2,
    0,
    3,
    0,
    3,
    0,
    2,
    0,
    2,
    0,
    1,
    0,
    2,
    0,
    3,
    0,
    4,
    0,
    1,
    0,
    3,
    0,
    3,
    0,
    3,
    0,
    4,
    0,
    2,
    0,
    2,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    3,
    0,
    2,
    0,
    3,
    0,
    4,
    0,
    1,
    0,
    4,
    0,
    3,
    0,
    4,
    0,
    3,
    0,
    4,
    0,
    4,
    0,
    3,
    0,
    3,
    0,
    4,
    0,
    3,
    0,
    3,
    0,
    4,
    0,
    4,
    0,
    3,
    0,
    1,
    0,
    2,
    0,
    3,
    0,
    2,
    0,
    3,
    0,
    1,
    0,
    2,
    0,
    3,
    0,
    4,
    0,
    4,
    0,
    1,
    0,
    4,
    0,
    3,
    0,
    4,
    0,
    1,
    0,
    4,
    0,
    3,
    0,
    3,
    0,
    2,
    0,
    3,
    0,
    1,
    0,
    1,
    0,
    4,
    0,
    4,
    0,
    3,
    0,
    2,
    0,
    1,
    0,
    4,
    0,
    3,
    0,
    3,
    0,
    3,
    0,
    2,
    0,
    2,
    0,
    3,
    0,
    3,
    0,
    3,
    0,
    4,
    0,
    3,
    0,
    3,
    0,
    4,
    0,
    3,
    0,
    1,
    0,
    2,
    0,
    2,
    0,
    2,
    0,
    3,
    0,
    1,
    0,
    1,
    0,
    4,
    0,
    4,
    0,
    3,
    0,
    4,
    0,
    4,
    0,
    1,
    0,
    3,
    0,
    4,
    0,
    4,
    0,
    1,
    0,
    4,
    0,
    2,
    0,
    3,
    0,
    4,
    0,
    4,
    0,
    2,
    0,
    4,
    0,
    3,
  ],*/
};

const GameOneScreen = props => {
  //console.log('propsselected: ', props);

  let sec1, milli1;
  let coco = 0;
  const [data, setData] = useState({
    training: {
      elapsedTime: 0,
      answers: [],
      reactionTime: [],
    },
    normal: {
      elapsedTime: 0,
      answers: [],
      reactionTime: [],
    },
    inverted: {
      elapsedTime: 0,
      answers: [],
      reactionTime: [],
    },
  });
  const [levels, setLevels] = useState(GAME_MAP.training);
  //const [levels, setLevels] = useState([1, 0, 2, 0, 3, 0, 4, 0, 1, 0, 2, 0, 3, 0, 4, 0]);
  //const [levels, setLevels] = useState([1, 0, 2, 0]);
  const [level, setLevel] = useState(0);
  const [levelTime, setLevelTime] = useState(0);
  const [stage, setStage] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let NGoArray = [
    4,
    11,
    13,
    19,
    22,
    23,
    35,
    42,
    46,
    47,
    57,
    59,
    64,
    67,
    71,
    82,
    84,
    89,
    91,
    92,
    95,
    101,
    102,
    109,
    116,
    119,
    123,
    131,
    137,
    146,
    149,
    153,
  ];
  let NGoArray2 = [
    1,
    3,
    4,
    6,
    8,
    10,
    12,
    15,
    17,
    19,
    20,
    21,
    25,
    27,
    30,
    34,
    36,
    38,
    40,
    42,
    43,
    45,
    48,
    50,
    54,
    57,
    58,
    62,
    66,
    68,
    70,
    72,
    76,
    77,
    78,
    79,
    81,
    83,
    84,
    86,
    89,
    90,
    92,
    95,
    97,
    100,
    102,
    104,
    107,
    110,
    112,
    113,
    116,
    118,
    121,
    123,
    125,
    128,
    129,
    133,
    134,
    136,
    138,
    140,
    143,
    144,
    146,
    149,
    152,
  ];

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      sec1 = new Date().getSeconds(); //To get the Current Seconds
      milli1 = new Date().getMilliseconds(); //To get the Current Seconds
      // console.log('2))) ', sec1, '===', milli1);
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      // console.log('useffect2');
      function tick() {
        savedCallback.current();
      }

      if (delay !== null) {
        // console.log('en el elemento ', level % 2);
        let valor = null;
        if (level % 2 === 0) {
          valor = 1000;
        } else {
          valor = 200;
        }
        let id = setInterval(tick, valor);
        return () => {
          clearInterval(id);
        };
      }
    });
  }

  const checkAnswer = wasPressed => {
    switch (stage) {
      case 1:
      case 3:
        if (wasPressed) {
          // Si el botón fue presionado
          if (levels[level] !== 0 && !NGoArray.includes(level)) {
            // Si el nivel era para presionar
            // console.log('wasPressed: TRUE');
            return true;
          } else {
            // Si el nivel no era para presionar
            // console.log('wasPressed: FALSE');
            return false;
          }
        } else {
          // Si el botón no fue presionado, es decir pasaron los x segundos
          if (levels[level] !== 0 && !NGoArray.includes(level)) {
            // Si el nivel era para presionar
            // console.log('NOTwasPressed: FALSE');
            return false;
          } else {
            // Si el nivel no era para presionar
            // console.log('NOTwasPressed: TRUE');
            return true;
          }
        }
      case 5:
        if (wasPressed) {
          // Si el botón fue presionado
          if (levels[level] !== 0 && NGoArray2.includes(level)) {
            // Si el nivel era para presionar
            return true;
          } else {
            // Si el nivel no era para presionar
            return false;
          }
        } else {
          // Si el botón no fue presionado, es decir pasaron los x segundos
          if (levels[level] !== 0 && NGoArray2.includes(level)) {
            // Si el nivel era para presionar
            return false;
          } else {
            // Si el nivel no era para presionar
            return true;
          }
        }
    }
  };

  const nextLevel = (wasPressed, ra) => {
    // console.log('nextlevel');
    setLevel(level + 1); // Pase al siguiente nivel
    saveStageData(wasPressed, ra); // Acumulo datos del usuario, si fue correcto y cuanto demoró
  };

  const saveStageData = (wasPressed, ra) => {
    switch (stage) {
      case 1:
        setData({
          ...data,
          training: {
            ...data.training,
            answers: [...data.training.answers, checkAnswer(wasPressed)],
            reactionTime: [...data.training.reactionTime, ra],
          },
        });
        break;
      case 3:
        setData({
          ...data,
          normal: {
            ...data.normal,
            answers: [...data.normal.answers, checkAnswer(wasPressed)],
            reactionTime: [...data.normal.reactionTime, ra],
          },
        });
        break;
      case 5:
        setData({
          ...data,
          inverted: {
            ...data.inverted,
            answers: [...data.inverted.answers, checkAnswer(wasPressed)],
            reactionTime: [...data.inverted.reactionTime, ra],
          },
        });
        break;
    }
  };

  const onNextStageHandler = () => {
    switch (stage) {
      case 0: // Si se avanza de stage, y está en stage 0(Primeras instrucciones), se comienza el training
        setIsRunning(true);
        setStage(stage + 1); // Avanzo al siguiente stage
        break;
      case 1: // Si se avanza de stage, y está en stage 1(Training), se lleva a las instrucciones nuevamente
        setData({
          ...data,
          training: {...data.training, elapsedTime: levelTime - 1},
        });
        setLevelTime(0);
        setLevels(GAME_MAP.normal);
        setStage(stage + 1);
        break;
      case 2: // Si se avanza de stage, y está en el Stage 2(Instrucciones después de training), se comienza el juego normal de 2 minutos
        setIsRunning(true);
        setStage(stage + 1);
        break;
      case 3: // Si se avanza de stage, y se está en el Stage 3(Juego normal), se lleva a las instrucciones de juego invertido
        setData({
          ...data,
          normal: {...data.normal, elapsedTime: levelTime - 1},
        });
        setLevelTime(0);
        setLevels(GAME_MAP.inverted);
        setStage(stage + 1);
        break;
      case 4: // Si se avanza de stage, y se está en el Stage 4(instrucciones de juego inertido), se comienza el juego invertido de 2 minutos
        setIsRunning(true);
        setStage(stage + 1);
        break;
      case 5: // Si se avanza de stage, y se está en el Stage 5(Juego invertido), se lleva a la pantalla de finalización
        setData({
          ...data,
          inverted: {...data.inverted, elapsedTime: levelTime - 1},
        });
        setLevelTime(0);
        setStage(stage + 1);
        break;
    }
  };

  useInterval(
    () => {
      setLevelTime(levelTime + 1);
    },
    isRunning ? DELAY_PER_LEVEL : null,
  );

  const onButtonPress = () => {
    // console.log('buttonPress');
    const sec = new Date().getSeconds(); //To get the Current Seconds
    const milli = new Date().getMilliseconds(); //To get the Current Seconds
    //console.log('BP)))  ', sec, '===', milli); ///*/
    //console.log('BP1)))  ', sec1, '===', milli1); ///*/
    if (sec === sec1) {
      // console.log('Reaction time: ', milli - milli1);
      coco = milli - milli1;
      //setReaction(milli - milli1);
    } else {
      // console.log('Reaction time: ', 1000 - milli1 + milli);
      //setReaction(1000 - milli1 + milli);
      coco = 1000 - milli1 + milli;
    }
    //console.log('presionado true');
    if (isRunning) {
      if (level === levels.length) {
        setLevel(0);
        setIsRunning(false);
        onNextStageHandler();
      } else {
        //setPresionado(true);
        nextLevel(true, coco);
      }
    } ///*/
  };

  useEffect(() => {
    if (isRunning) {
      if (level === levels.length) {
        setLevel(0);
        setIsRunning(false);
        onNextStageHandler();
      } else {
        //setPresionado(false);
        //setReaction(1001);
        nextLevel(false, 1001);
      }
    }
  }, [levelTime]);

  function getSum(acum, item) {
    if (!item) {
      return 1 + acum;
    } else {
      return 0 + acum;
    }
  }

  const renderSwitcher = stage => {
    let TheImage;
    switch (stage) {
      case 0:
        return (
          <GameOneInstructions
            onNextStageHandler={onNextStageHandler}
            stage="entrenamiento"
          />
        );
      case 1:
        //console.log("rendering....");
        TheImage = level <= 7 ? RedFlower : GreenFlower;
        return (
          <SafeAreaView
            style={styles.container}
            onTouchStart={() => onButtonPress()}>
            <View style={styles.images}>
              <Image
                style={styles.image}
                source={levels[level] === 1 ? TheImage : Bird}
              />
              <Text style={styles.baseText}>{'                    '}</Text>
              <Image
                style={styles.image}
                source={levels[level] === 2 ? TheImage : Bird}
              />
            </View>
            <View style={styles.images}>
              <Image
                style={styles.image}
                source={levels[level] === 3 ? TheImage : Bird}
              />
              <Text style={styles.baseText}>{'                    '}</Text>
              <Image
                style={styles.image}
                source={levels[level] === 4 ? TheImage : Bird}
              />
            </View>

            {/* <Button
              onPress={() => onButtonPress()}
              text="Botón"
              backgroundColor={BACKGROUND_COLOR}
              fontColor={WHITE_COLOR}
            /> */}
          </SafeAreaView>
        );
      case 2:
        // console.log('The previous answers1: ', JSON.stringify(data));
        return (
          <GameOneInstructions
            onNextStageHandler={onNextStageHandler}
            stage="prueba normal"
          />
        );
      case 3:
        TheImage = RedFlower;
        NGoArray = NGoArray.map(function(elemento) {
          return elemento * 2;
        });
        if (NGoArray.includes(level)) {
          // console.log('Sí señor, justo en el blanco ', level);
          TheImage = GreenFlower;
        }
        return (
          <SafeAreaView
            style={styles.container}
            onTouchStart={() => onButtonPress()}>
            <View style={styles.images}>
              <Image
                style={styles.image}
                source={levels[level] === 1 ? TheImage : Bird}
              />
              <Text style={styles.baseText}>{'                    '}</Text>
              <Image
                style={styles.image}
                source={levels[level] === 2 ? TheImage : Bird}
              />
            </View>
            <View style={styles.images}>
              <Image
                style={styles.image}
                source={levels[level] === 3 ? TheImage : Bird}
              />
              <Text style={styles.baseText}>{'                    '}</Text>
              <Image
                style={styles.image}
                source={levels[level] === 4 ? TheImage : Bird}
              />
            </View>

            {/*   <Button
              onPress={() => onButtonPress()}
              text="Botón"
              backgroundColor={BACKGROUND_COLOR}
              fontColor={WHITE_COLOR}
            /> */}
          </SafeAreaView>
        );
      case 4:
        return (
          <GameOneInstructions
            onNextStageHandler={onNextStageHandler}
            stage="prueba invertida"
          />
        );
      case 5:
        TheImage = RedFlower;
        NGoArray2 = NGoArray2.map(function(elemento) {
          return elemento * 2;
        });
        if (NGoArray2.includes(level)) {
          // console.log('Sí señor, justo en el blanco ', level);
          TheImage = GreenFlower;
        }
        return (
          <SafeAreaView
            style={styles.container}
            onTouchStart={() => onButtonPress()}>
            <View style={styles.images}>
              <Image
                style={styles.image}
                source={levels[level] === 1 ? TheImage : Bird}
              />
              <Text style={styles.baseText}>{'                    '}</Text>
              <Image
                style={styles.image}
                source={levels[level] === 2 ? TheImage : Bird}
              />
            </View>
            <View style={styles.images}>
              <Image
                style={styles.image}
                source={levels[level] === 3 ? TheImage : Bird}
              />
              <Text style={styles.baseText}>{'                    '}</Text>
              <Image
                style={styles.image}
                source={levels[level] === 4 ? TheImage : Bird}
              />
            </View>
            {/* <Button
              onPress={() => onButtonPress()}
              text="Botón"
              backgroundColor={BACKGROUND_COLOR}
              fontColor={WHITE_COLOR}
            /> */}
          </SafeAreaView>
        );
      case 6:
        //console.log('The answers: ', JSON.stringify(data));
        const erroresNormally = data.normal.answers.reduce(getSum, 0);
        const erroresInvertido = data.inverted.answers.reduce(getSum, 0);
        const totalAnswers =
          data.normal.answers.length + data.inverted.answers.length;
        // Proporcion es igual el total de respuestas menos todas las respuestas
        // erroneas (totalAnswers-erroresNormally-erroresInvertido) sobre totalAnswers
        const proporcionAciertos =
          (totalAnswers - erroresNormally - erroresInvertido) / totalAnswers;
        /*console.log('erroresN: ', erroresNormally);
        console.log('erroresI: ', erroresInvertido);
        console.log('proporcionAciertos: ', proporcionAciertos);
        console.log('reactionTimeNormy: ', data.normal.reactionTime);
        console.log('RT inver: ', data.inverted.reactionTime);*/
        props.addStudentResults(
          'tarea1',
          props.codigoE,
          data.normal.elapsedTime,
          data.normal.answers,
          data.normal.reactionTime,
          data.inverted.elapsedTime,
          data.inverted.answers,
          data.inverted.reactionTime,
          proporcionAciertos,
        );
        return <SessionFinishedScreen navigation={props.navigation} />;
    }
  };

  return <>{renderSwitcher(stage)}</>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE_COLOR,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'contain',
    width: 120,
    height: 250,
  },
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});

export default GameOneScreen;
