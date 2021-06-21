import { STATUS_DB_CONNECTED } from './general'

describe('Tests constant exports', () => {
  test('DB Connection Status is expected', async () => {
    const string = STATUS_DB_CONNECTED
    expect(string).toBe('DB_Connected')
  })
})
