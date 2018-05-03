<template>
    <div class="container">
       <div v-for="column in columns" :key="column.id">

       </div>

    </div>
</template>

<script>
import CategoryApi from '../js/apis/category-api';

var categoryApi = new CategoryApi();



export default {
    data(){
        columns: categoryApi.get().reduce((res, val, idx, arr) => {
            if (idx % 2 === 0){
                var parts = arr.slice(idx, idx + 2);
                res.push({ id: parts[0] });
                res.push({ id: parts[1] });
            }
            return res;
        }, []);
    }
}
</script>

