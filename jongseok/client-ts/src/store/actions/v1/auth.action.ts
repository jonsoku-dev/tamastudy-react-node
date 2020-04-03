import { toast } from 'react-toastify';
import { API } from '../../../utils/axios';
import { Dispatch } from 'redux';
import { IAuthAction } from '../../reducers/v1/auth.reducer';
import { ISignFormData } from '../../../components/pages/Sign/SignContainer';

// 유저 아이디 가져오기
export const getCurrentUserIdFn = () => async (dispatch: Dispatch<IAuthAction>) => {
  try {
    const res = await API.get('/user/me');
    dispatch({
      type: 'LOAD_USER',
      payload: res.data.result._id,
    });
  } catch (err) {
    dispatch({ type: 'AUTH_ERROR', payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

// 로그인
export const signinFn = (formData: ISignFormData) => async (dispatch: Dispatch<IAuthAction>) => {
  try {
    const res = await API.post('/user/signin', formData);
    localStorage.setItem('token', res.data.result);
    dispatch({
      type: 'SIGN_IN',
      payload: res.data.result,
    });
    toast.success('로그인 성공');
  } catch (err) {
    dispatch({ type: 'AUTH_ERROR', payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

// 회원가입
export const signupFn = (formData: ISignFormData) => async (dispatch: Dispatch<IAuthAction>) => {
  try {
    const res = await API.post('/user/signup', formData);
    localStorage.setItem('token', res.data.result);
    dispatch({
      type: 'SIGN_UP',
      payload: res.data.result,
    });
    toast.success('회원가입이 완료되었습니다. ');
  } catch (err) {
    dispatch({ type: 'AUTH_ERROR', payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};
