
// background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');


const ExploreCard = ({ text, icon}) => {
  return (
    <div className="cursor-pointer flex justify-center py-6  shadow-lg border-[1px] rounded-lg hover:scale-110  transition-all duration-300  hover:text-white hover:bg-primary">
        <div className="text-center ">
            <div className="flex justify-center mb-2  hover:text-white">
                {icon}
            </div>
            
            <p>{text}</p>
        </div>
    </div>
  )
}

export default ExploreCard