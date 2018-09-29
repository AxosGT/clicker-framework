export const CLICK_COUNT = 'CLICK_COUNT';


export function clickCount(sumAdded=0){
  return{
    type:CLICK_COUNT,
    sumAdded
  }
}
