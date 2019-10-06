<template>
    <div class ='loading'>
        <div class="s">
            <span class ='fa fa-spinner'></span>
        </div>
    </div>
</template>

<style lang="less">
    .loading{
        margin-top:100px;
       width: 100%;
        .s{
            text-align: center;
          span{
              font-size: 30px;
              animation:rotate 2s ease forwards infinite;
          }
          
        }
        
    }
  @keyframes rotate {
      form{
          transform: rotate(0)
      }
      to{
          transform: rotate(360deg)
      }
  }
</style>