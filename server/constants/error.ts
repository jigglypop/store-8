interface IErrorItem {
  status: number;
  message: string;
  serverMessage: string;
}

interface IError {
  [key: string]: IErrorItem;
}

export const err: IError = {
  TEST_ERROR: {
    status: 400,
    message: '테스트 하는중입니다.',
    serverMessage: 'Just for test',
  },

  SAMPLE_ERROR: {
    status: 400,
    message: '클라이언트에 전달한 메세지입니다.',
    serverMessage: '서버에 표시할 로그입니다.',
  },

  INVALID_INPUT_ERROR: {
    status: 400,
    message: '잘못된 입력이 있습니다.',
    serverMessage: 'Invalid input request error',
  },

  NO_DATA: {
    status: 401,
    message: '조회된 데이터가 없습니다.',
    serverMessage: 'No such data error',
  },

  LOGIN_ERROR: {
    status: 401,
    message: '해당 아이디가 존재하지 않습니다.',
    serverMessage: 'No such user error',
  },

  WRONG_PASSWORD_ERROR: {
    status: 401,
    message: '비밀번호가 틀렸습니다.',
    serverMessage: 'Wrong password',
  },

  JWT_TOKEN_INVALID_ERROR: {
    status: 401,
    message: '검증되지 않은 token 입니다.',
    serverMessage: 'Wrong JWT token access error',
  },
  JWT_FAIL: {
    status: 403,
    message: '토큰 생성에 실패했습니다',
    serverMessage: 'Wrong JWT token access error',
  },

  EXIST_USER_ID_ERROR: {
    status: 401,
    message: '이미 존재하는 ID 입니다.',
    serverMessage: 'Already exist ID',
  },

  EXIST_REFUND_ERROR: {
    status: 401,
    message: '이미 환불요청된 주문입니다.',
    serverMessage: 'Already exist REFUND',
  },

  CREATE_ERROR: {
    status: 400,
    message: '비정상적으로 생성이 취소되었습니다.',
    serverMessage: 'DB Create SQL query error',
  },

  NO_PRODUCT_ERROR: {
    status: 400,
    message: '요청한 물건이 없습니다.',
    serverMessage: 'There is no product have such pk',
  },

  UPDATE_ERROR: {
    status: 400,
    message: '업데이트에 실패 했습니다.',
    serverMessage: 'Update Fail',
  },

  DELETE_ERROR: {
    status: 400,
    message: '삭제에 실패 했습니다.',
    serverMessage: 'Delete Fail',
  },

  WRONG_ACCESS_ERROR: {
    status: 401,
    message: '잘못된 접근입니다.',
    serverMessage: 'Wrong access',
  },

  IMPURE_DATA_ERROR: {
    status: 400,
    message: '저장된 데이터에 오류가 있습니다!\n관리자에게 문의하세요.',
    serverMessage: 'Critical Error. Insane, Impure Data!!!!',
  },

  NO_SESSION: {
    status: 403,
    message: '세션이 없습니다.',
    serverMessage: 'Critical Error. Insane, Impure Data!!!!',
  },
  NO_ALLOWED: {
    status: 401,
    message: '사용자 인증에 실패했습니다.',
    serverMessage: 'Critical Error. Insane, Impure Data!!!!',
  },
  WRONG_ACCESS_QUESTION: {
    status: 409,
    message: '본인의 문의 혹은 존재하는 문의가 아닙니다.',
    serverMessage: 'wrong access to question',
  },
  WRONG_ACCESS_REVIEW: {
    status: 409,
    message: '본인의 후기 혹은 존재하는 후기가 아닙니다.',
    serverMessage: 'wrong access to review',
  },
};
