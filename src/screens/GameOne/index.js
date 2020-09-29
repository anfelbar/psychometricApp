import GameOneScreen from './GameOneScreen';
import * as Students from '../../redux/actions/Students';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  //console.log('state en mapstateprops', JSON.stringify(state));
  return {
    user: state.auth.userEmail,
    codigoE: state.students.selectedStudent,
  };
};

const mapDispatchToProps = dispatch => {
  console.log('En mapDispatch gameOne');
  return {
    addStudentResults: (
      actividad,
      codigo,
      tiempoNormal,
      datosNormal,
      tiempoReaccionNormal,
      tiempoInvertido,
      datosInvertido,
      tiempoReaccionInvertido,
      proporcionAciertos,
    ) =>
      dispatch(
        Students.Actions.addOwnStudentResult(
          actividad,
          codigo,
          tiempoNormal,
          datosNormal,
          tiempoReaccionNormal,
          tiempoInvertido,
          datosInvertido,
          tiempoReaccionInvertido,
          proporcionAciertos,
        ),
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameOneScreen);
