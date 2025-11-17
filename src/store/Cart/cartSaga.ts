import { call, put, takeEvery } from 'redux-saga/effects';


function* handleCartDelete(action: any) {
  // Placeholder for future cart delete side effects
  yield call(() => Promise.resolve(setTimeout(() => {}, 1000)));
  yield put({ type: 'cart/removeItem', payload: action.payload });

}

export function* watchCartDelete() {
    yield takeEvery('cart/triggerRemoveItem', handleCartDelete);
}