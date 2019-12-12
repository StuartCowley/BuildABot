<template>
    <div class="robot-builder-wrapper">
        
            <div class="preview">                
            <CollapsibleContent>
                <div class="preview-content">
                    <span class="cart__span" v-if="selectedRobot.head.onSale"> Sale! </span>
                    <div class="top-row">
                        <img :src="selectedRobot.head.src"/>
                    </div>
                    <div class="middle-row">
                        <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
                        <img :src="selectedRobot.torso.src"/>
                        <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
                    </div>
                    <div class="bottom-row">
                        <img :src="selectedRobot.base.src"/>
                    </div>
                    <div class="button-wrap">
                        <button @click="addToCart" class="cart__button" >Add to cart</button>
                        
                    </div>
                </div>
            </CollapsibleContent>
        </div>
        
        
        <div class="robot-name">
            {{selectedRobot.head.title}}
        </div>
        
        <div class="top-row">
            <PartSelector :parts="availableParts.heads" position="top" @partSelected="part => selectedRobot.head=part" />
        </div>
        <div class="middle-row">
            <PartSelector :parts="availableParts.arms" position="left" @partSelected="part => selectedRobot.leftArm=part" />
            <PartSelector :parts="availableParts.torsos" position="center" @partSelected="part => selectedRobot.torso=part" />
            <PartSelector :parts="availableParts.arms" position="right" @partSelected="part => selectedRobot.rightArm=part" />
        </div>
        <div class="bottom-row">
            <PartSelector :parts="availableParts.bases" position="bottom" @partSelected="part => selectedRobot.base=part" />
        </div>
        <!-- <div class="cart">
            <div class="cart__heading">
                <div class="cart__heading--item">Robot Name</div>
                <div class="cart__heading--item">Cost</div>
            </div>
            <div v-for="(robot, index) in cart" :key=index class="cart__body">
                <div class="cart__body--item">{{cart[index].name}}</div>
                <div class="cart__body--item">{{cart[index].totalCost}}</div>
            </div>
            

        </div> -->
    </div>
</template>

<script>
import availableParts from '../../data/parts';
import PartSelector from './PartSelector';
import CollapsibleContent from '../../shared/CollapsibleContent'

export default {
    name: 'RobotBuilder',
    components: {PartSelector, CollapsibleContent},
    data() {
        return {
            availableParts,
            cart : [],
            selectedRobot: {
                head: {},
                leftArm: {},
                torso: {},
                rightArm: {},
                base: {}
            },                
        }
    },
    computed: {
        saleHighlight() {
            return this.selectedRobot.head.onSale ? 'saleHighlight' : '';
        }
    },
    methods: {
        addToCart() {
            const robot = this.selectedRobot;
            const name = robot.head.title;
            const totalCost = robot.head.cost + robot.leftArm.cost + robot.torso.cost + robot.rightArm.cost + robot.base.cost;
            const onSale = robot.head.onSale
            const robotObj = {name, totalCost, onSale};
            this.$store.commit('addRobotToCart', robotObj)
            this.cart.push(robotObj);
        },
    },
    
}
</script>

<style lang='scss' scoped>

.robot-builder-wrapper
{
    position: relative;
}

.part {
    position: relative;
    width: 165px;
    height: 165px;
    border: 3px solid #aaa;
    img {
        width: 165px;
    }
}

.top-row {
    display: flex;
    justify-content: space-around;
}
.middle-row {
    display: flex;
    justify-content: center;
}
.bottom-row {
    display: flex;
    justify-content: space-around;
    border-top: none;
}
.head {
    border-bottom: none;
}
.left {
    border-right: none;
}
.right {
    border-left: none;
}
.left {
    img 
    {
        transform: rotate(-90deg);
    }
}
.right {
    img 
    {
        transform: rotate(90deg);
    }
}
.bottom {
    border-top: none;
}
.prev-selector {
    position: absolute;
    z-index: 1;
    top: -3px;
    left: -28px;
    width: 25px;
    height: 171px;
}
.next-selector {
    position: absolute;
    z-index: 1;
    top: -3px;
    right: -28px;
    width: 25px;
    height: 171px;
}
.center {
    .prev-selector
    {
        opacity: 0.8;
    }
    .next-selector
    {
        opacity: 0.8;
    }
    
}
.left {
    .prev-selector 
    {
        top: -28px;
        left: -3px;
        width: 144px;
        height: 25px;
    }
}
.left {
    .next-selector
    {
        top: auto;
        bottom: -28px;
        left: -3px;    
        width: 144px;
        height: 25px;
    }
}
.right {
    .prev-selector
    {
        top: -28px;
        left: 24px;  
        width: 144px;
        height: 25px;
    }
}
.right {
    .next-selector
    {
        top: auto;
        bottom: -28px;
        left: 24px;    
        width: 144px;
        height: 25px;
    }
}
.right {
    .next-selector
    {
        right: -3px;
    }
}
.robot-name
{ 
    text-align: center;
    width: 100%;
    display: block;
}
.cart
{
    &__button
    {
        height: 100%;
        width: 100%;
        padding: 0;

    }
        &__span
    {
        position: absolute;
        display: block;
        margin-left: 10px;
        margin-top: 10px;
        color: red;
        background-color: white;
    }
}
//     &__heading
//     {        
//         &--item
//         {
//             display: inline-block;
//             width: 150px;
//             font-weight: 700;
//         }
//     }
//     &__body
//     {
//         &--item
//         {
//             display: inline-block;
//             width: 150px;
//         }
//     }
// }
.button-wrap
{
    height: 24px;
}
.saleHighlight
{
    border: red solid 3px;
}

.preview {
  position: absolute;
  right: 0;
  width: 210px;
  height: 210px;
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: 50px;
  height: 50px;
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}
</style>