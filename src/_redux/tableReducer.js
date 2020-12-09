import api from '../_api/api'
import { filterTableByInput } from '../_utils/filter'
import { sortItemsByKey } from '../_utils/sort'
import { showError } from './appReducer'

const GET_TABLE_DATA_SUCCESS = 'tableReducer/GET_TABLE_DATA_SUCCESS'
const CLEAR_TABLE = 'tableReducer/CLEAR_TABLE'
const ADD_NEW_ROW_SUCCESS = 'tableReducer/ADD_NEW_ROW_SUCCESS'
const SORT_TABLE_SUCCESS = 'tableReducer/SORT_TABLE_SUCCESS'
const FILTER_TABLE_SUCCESS = 'tableReducer/FILTER_TABLE_SUCCESS'
const SET_CURRENT_PAGE = 'tableReducer/SET_CURRENT_PAGE'
const SHOW_ADDITIONAL_INFO = 'tableReducer/SHOW_ADDITIONAL_INFO'
const TOGGLE_IS_FETCHING = 'tableReducer/SHOW_ADDITIONAL_INFO'

const getTableDataSuccess = (payload) => ({
  type: GET_TABLE_DATA_SUCCESS,
  payload,
})
const clearTable = () => ({
  type: CLEAR_TABLE,
  payload: { rows: [], chosenItem: '' },
})
const addNewRowSuccess = (payload) => ({
  type: ADD_NEW_ROW_SUCCESS,
  payload,
})
const sortTableSuccess = (payload) => ({
  type: SORT_TABLE_SUCCESS,
  payload,
})
const filterTableSuccess = (payload) => ({
  type: FILTER_TABLE_SUCCESS,
  payload,
})
export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload: { currentPage: payload },
})
export const setChosenItem = (payload) => ({
  type: SHOW_ADDITIONAL_INFO,
  payload: { chosenItem: payload },
})
const toggleIsFetching = (payload) => ({
  type: TOGGLE_IS_FETCHING,
  payload: { isFetching: payload },
})

export const getTableData = (url) => async (dispatch) => {
  dispatch(showError(null))
  dispatch(clearTable())
  dispatch(toggleIsFetching(true))
  try {
    const tableData = await api.getData(url)
    dispatch(getTableDataSuccess({ rows: tableData }))
  } catch (e) {
    dispatch(showError('Не удалось загрузить данные'))
  }
  dispatch(toggleIsFetching(false))
}
export const addNewRow = (rows, newRow) => async (dispatch) => {
  const newRows = [newRow, ...rows]
  dispatch(addNewRowSuccess({ rows: newRows }))
  dispatch(setCurrentPage(1))
}
export const sortTable = (rows, sortedColumn, method) => async (dispatch) => {
  const sortedItems = sortItemsByKey(rows, sortedColumn, method)
  dispatch(sortTableSuccess({ rows: sortedItems }))
  dispatch(setChosenItem(''))
}
export const filterTable = (items, input, filtersApplied, headers) => async (
  dispatch
) => {
  const filters = [...filtersApplied]
  const filteredRows = filterTableByInput(items, input, headers)
  if (input) {
    if (!filters.includes(FILTER_TABLE_SUCCESS))
      filters.push(FILTER_TABLE_SUCCESS)
  } else {
    const index = filters.indexOf(FILTER_TABLE_SUCCESS)
    filters.splice(index, 1)
  }
  dispatch(filterTableSuccess({ filteredRows, filtersApplied: filters }))
  dispatch(setCurrentPage(1))
}

const initialState = {
  headers: ['id', 'firstName', 'lastName', 'email', 'phone'],
  rows: [],
  filteredRows: [],
  filtersApplied: [],
  currentPage: 1,
  chosenItem: '',
}

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TABLE_DATA_SUCCESS:
    case CLEAR_TABLE:
    case ADD_NEW_ROW_SUCCESS:
    case SORT_TABLE_SUCCESS:
    case FILTER_TABLE_SUCCESS:
    case SET_CURRENT_PAGE:
    case SHOW_ADDITIONAL_INFO:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
export default tableReducer
