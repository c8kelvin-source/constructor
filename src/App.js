import Header from './header';
import Footer from './footer';
import Banner from './banner';
import Card from './Card';
import OurReputation from './OurReputation';
import FormInfo from './FormInofr';
function App() {
  return (
    <div>
      <Header />



      <Banner />
      <h2>Nội dung chính của trang</h2>
      <Card
        name="Ronaldo"
        age="39"
        description="Cầu thủ bóng đá nổi tiếng."
      />

      <Card
        name="Messi"
        age="38"
        description="Cầu thủ luôn cạnh tranh với Ronaldo."
      />

      <Card
        name="Neymar"
        age="32"
        description="Kỹ thuật đẹp mắt và tốc độ."
      />
      <OurReputation 
        title="Chất lượng hàng đầu"
        description="Chúng tôi luôn mang đến chất lượng sản phẩm tốt nhất."
      />

      <OurReputation 
        title="Uy tín lâu năm"
        description="Được khách hàng tin tưởng trong suốt 20 năm."
      />

      <OurReputation 
        title="Hỗ trợ tận tâm"
        description="Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ bạn."
      />
       <FormInfo />

      <Footer />
    </div>
  );
}




export default App;

