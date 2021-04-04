import { createSelector } from 'reselect'

const selectTransactions = (state) => state.payment
export const selectPayments = createSelector(
  [selectTransactions],
  (payment) => payment?.transactions
)
export const selectTotalAmount = createSelector(
  [selectPayments],
  (transaction) =>
    transaction.reduce(
      (accumulated, transaction) => accumulated + transaction.amount,
      0
    )
)
export const selectActiveId = createSelector(
  [selectTransactions],
  (payment) => payment?.activeId
)
export const selectPage = createSelector(
  [selectTransactions],
  (payment) => payment?.page
)
export const selectLoading = createSelector(
  [selectTransactions],
  (payment) => payment?.loading
)
export const selectError = createSelector(
  [selectTransactions],
  (payment) => payment?.error
)
export const selectFilter = createSelector(
  [selectTransactions],
  (payment) => payment?.filter
)
export const selectStopFetching = createSelector(
  [selectTransactions],
  (payment) => payment?.stopFetching
)
