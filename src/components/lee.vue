<template>
    <div>
        <div v-for="i in arr" :key="i.title">
            {{i.title}}
            <div style="margin-left:40px" v-if="i.arr">
                <lee :arr="i.arr"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['arr']
}
</script>