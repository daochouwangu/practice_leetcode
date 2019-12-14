/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 * 此题二分查找最快
 */
var kthSmallest = function(matrix, k) {
    let heap = buildHeap(matrix, k);
    return heap[1];
};
var buildHeap = function(matrix, k) {
    let heap = [0, matrix[0][0]];
    for(let i = 0;i<matrix.length; i++){
        for(let j = 0; j < matrix.length;j++){
            if(i===0 && j===0) continue;
            if(heap[1] < matrix[i][j] && heap.length > k){
                continue;
            } else{
                if(heap.length <= k) {
                    insert(matrix[i][j]);
                } else {
                    remove();
                    insert(matrix[i][j]);
                }
            }
        }
    }
    function insert(ele){
        heap.push(ele);
        let child = heap.length - 1;
        while(child > 0) {
            let parent = parseInt(child / 2);
            if(parent > 0 && heap[parent] < heap[child]){
                [heap[child], heap[parent]] = [heap[parent], heap[child]];
                child = parent;
            } else {
                break;
            }
        }
    }
    function remove(){
        heap[1] = heap[heap.length - 1];
        heap.pop();
        let i = 1;
        while(true) {
            let maxPos = i;
            if(i * 2 < heap.length && heap[i] < heap[i * 2]){
                maxPos = i * 2
            } 
            if(i * 2 + 1 < heap.length  && heap[maxPos] < heap[i * 2 + 1]){
                maxPos = i * 2 + 1;
            }
            if(maxPos === i) break;
            [heap[i], heap[maxPos]] = [heap[maxPos], heap[i]];
            i = maxPos;
        }
    }
    return heap;
}
