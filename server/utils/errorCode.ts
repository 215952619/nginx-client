export enum SuccessCode {
  "success" = 200,
}

export enum ServerErrorCode {
  "source not found" = 50001,
}

export enum ClientErrorCode {
  "error validCode" = 40001,
}

// ErrorCode 应该包含所有的错误码
export type ErrorCode = SuccessCode | ServerErrorCode | ClientErrorCode;

export const errorMap = {
  [SuccessCode.success]: "success",
  [ServerErrorCode["source not found"]]: "source not found",
  [ClientErrorCode["error validCode"]]: "error validCode",
};

export const errorMapReverse = {
  success: SuccessCode.success,
  "source not found": ServerErrorCode["source not found"],
  "error validCode": ClientErrorCode["error validCode"],
};
