export function useCameraError(error: any) {
  if (error && error.name) {
    return error.name
  } else {
    return 'camera_unexpected_error'
  }
}
