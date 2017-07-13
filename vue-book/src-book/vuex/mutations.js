
import {ADD_COLLECT,REMOVE_COLLECT} from './mutation-types';


export const mutations={
  //n代表要收藏的那本书，将这本书放入到数组中
  [ADD_COLLECT](state,n){
    //如果以前收藏过 不添加 some返回的结果是true 则跳出循环返回true，如果都是false，返回的结果就是false
    let flag=state.collect.some(item=>item.id===n.id);
    //如果有不添加
    if (!flag){
      state.collect.push(n);
    }
  }
};

//map forEach filter reduce find(es6) some
