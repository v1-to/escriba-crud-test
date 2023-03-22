export function accessInnerProperty(path: string, obj: Record<string, any>) {
  return path.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : null
  }, obj || self)
}
