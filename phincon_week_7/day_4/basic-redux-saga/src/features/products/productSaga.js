import { put, call, takeLatest } from "redux-saga/effects";
import { getAllProducts } from "./productAction";
import { getAllProductsSuccess, getAllProductsFailed } from "./productSlice";

function* getAllProductsSaga() {
    try {
        const response = yield call(getAllProducts);
        yield put(getAllProductsSuccess(response));
    } catch (error) {
        yield put(getAllProductsFailed(error.message));
    }
}

function* productSaga() {
    yield takeLatest("products/getAllProducts", getAllProductsSaga);
}

export default productSaga;