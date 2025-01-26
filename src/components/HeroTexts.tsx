import TextRotator from "./TextRotator";

 
// 定义一个名为HeroTexts的函数组件
const HeroTexts = () => {
 
  
  // 返回一个包含三个子组件的JSX元素
  return (
    <>
      {/* 定义一个h3标签，字体为poppins，字号为2xl，最大为sm时字号为xl */}
      <h3 className="font-poppins text-2xl max-sm:text-xl" >My Name is</h3>
      {/* 定义一个h1标签，字体为rubik，字号为8xl，最大为sm时字号为6xl，文本颜色为primary */}
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl " >
        Nino <br /> Huang .
      </h1>
      {/* 引入TextRotator组件 */}
        <TextRotator/>
     
    </>
  );
};
export default HeroTexts