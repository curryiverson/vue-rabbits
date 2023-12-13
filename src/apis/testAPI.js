import http from '@/utils/http'

export const getCategory = () => {
  return http({
    url:'home/category/head'
  })
}