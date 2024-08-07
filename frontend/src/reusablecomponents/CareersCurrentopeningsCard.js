import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";

const TruncatedParagraph = ({ text, limit = 50 }) => {
    const [truncatedText, setTruncatedText] = useState(text);
  
    useEffect(() => {
      const words = text.split(' ');
      if (words.length <= limit) {
        setTruncatedText(text);
        return;
      }
      setTruncatedText(words.slice(0, limit).join(' ') + '...');
    }, [text, limit]);
  
    return (
    //   <p className='ps-3 pe-3'>{truncatedText}</p>
      <p className='ps-3 pe-3' dangerouslySetInnerHTML={{ __html: truncatedText }} />
    );
  };



const CareersCurrentopeningsCard = ({data}) => {

    const [modalData , setModaldata]=useState({});

    const handleClick = (index) => {
        setModaldata(data[index])
      }
    const styles=`
    .openingscard{
        width:30%;
        border-bottom:8px solid red !important;
    }
    .card-footer{
        background:none !important;
        border:none;
    }
    .openingsmodalcard{
        width:100%;
        border-bottom:8px solid red; 
    }
    @media screen and (max-width:767px){
        .openingscard{
            width:100%;
            margin-top:20px;
            margin-bottom:20px;
        }
    }
    `
    return (
        <>
        <style>{styles}</style>
        {data.map((item,i)=>(
            <div key={i} className='card border-2 openingscard' data-aos={item.aos} data-aos-once="true" data-aos-duration="1500">
               <div className='card-body'>
               <div className='d-flex flex-wrap'>
                {item.list.map((li,j)=>(
                    <span className='border p-1 m-1' key={j}>{li}</span>
                ))}
                </div>
                <h6 className='text-center text-danger p-2 mt-3'>{item.head}</h6>
                <TruncatedParagraph text={item.p1} limit={item.limit} /> 
               </div>
                <div className='card-footer text-center'>
                <button type="button" onClick={()=>handleClick(i)} className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#staticBackdrop">{item.moredetails}</button>
                </div>
            </div>
        ))}


{/* modal */}
<div className="modal fade modal-lg" id="staticBackdrop"  data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
       <Link to="mailto:info@infomericainc.com" className='btn btn-primary'>Send Resume</Link>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className='card openingsmodalcard'>
        {Object.keys(modalData).length>0 && 
               <div className='card-body'>
               <div className='d-flex flex-wrap'>
                {modalData.list.map((li,j)=>(
                    <span className='border p-1 m-1' key={j}>{li}</span>
                ))}
                </div>
                <h6 className='text-center text-danger p-2 mt-4'>{modalData.head}</h6>
                <p className='p-2 mt-4' style={{lineHeight:"28px"}} dangerouslySetInnerHTML={{ __html: modalData.p1 }} />
                <p className='p-2 mt-4' style={{lineHeight:"28px"}} dangerouslySetInnerHTML={{ __html: modalData.p2 }} />
                <p className='p-2 mt-4' style={{lineHeight:"28px"}} dangerouslySetInnerHTML={{ __html: modalData.p3 }} />
                <p className='p-2 mt-4' style={{lineHeight:"28px"}} dangerouslySetInnerHTML={{ __html: modalData.p4 }} />
               </div>
        }
            </div>
      </div>
      <div className="modal-footer d-flex flex-end">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
           
        </>
    );
};

export default CareersCurrentopeningsCard;