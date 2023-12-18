import AIBtn from '@/components/button/AIBtn';
import ImgDownloadBtn from '@/components/button/ImgDownloadBtn';

interface DownloadBtnProps {
  filePath: string;
  fileType: 'ai' | 'img';
}

const DownloadBtn = ({ filePath, fileType }: DownloadBtnProps) => {
  const downloadFile = () => {
    // Replace 'your_image_url' with the URL of your image or any file
    const filePathList = filePath.split('/');
    const originFileType = filePathList[filePathList.length - 1];

    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = originFileType; // specify the file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error('Error downloading file:', error));
  };

  return (
    <button onClick={downloadFile}>
      {fileType === 'ai' ? <AIBtn /> : <ImgDownloadBtn />}
    </button>
  );
};

export default DownloadBtn;
