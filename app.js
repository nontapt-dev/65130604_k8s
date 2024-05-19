const express = require("express");
const app = express();

// Serve static files from the "styles" directory
app.use('/styles', express.static('styles'));

// Home route
app.get("/", (req, res) => {
    res.send(`
      <img src="https://cdn.discordapp.com/attachments/1218818244404576346/1218822207862734869/me.jpg?ex=664afaa2&is=6649a922&hm=7452e7eed138074b7fe44da5a16a1efa232e38c6b4602f722ecaa2341e2395be&" alt="รูปภาพ">
      <p>id: 65130604</p>
      <p>nontapat khieorat</p>
      <a href="/myresearch">My Research</a>  
      <a href="/researchplan">My Researchplan</a>
      <a href="/rest/researchplan/">Rest My Research Plan</a>     
  
  
    `);
  });
  

// My Research route
app.get("/myresearch", (req, res) => {
  res.send(`
     
    <p>การตรวจจับความเร็วรถยนต์โดยใช้ YOLOV8 <br>
    การตรวจสอบความปลอดภัยบนถนนกลับมาเป็นเรื่องสำคัญเพื่อลดอุบัติเหตุและเพิ่มความปลอดภัยในชุมชน ทางเมืองจึงตัดสินใจนำเทคโนโลยีการมองเห็นคอมพิวเตอร์ (Computer Vision) มาใช้ในการตรวจจับความเร็วของรถ โดยใช้ YOLO (You Only Look Once) เป็นเครื่องมือหลักในการตรวจจับวัตถุและการเชื่อมโยงกับ framerate ในการวัดเวลาของการตรวจจับ โปรเจกต์นี้มีจุดประสงค์เพื่อเพิ่มประสิทธิภาพในการตรวจจับความเร็วบนถนน เพื่อลดจำนวนอุบัติเหตุที่เกิดขึ้นในชุมชน และเพิ่มความปลอดภัยให้กับประชากรท้องถิ่น โดยมีรายละเอียดดังนี้
    การเตรียมโมเดล YOLOV8 ผู้วิจัยจะฝึกสอนโมเดล YOLOV8 ด้วยชุดข้อมูลที่ประกอบด้วยรูปภาพของรถยนต์ที่มีความเร็วต่างๆ รวมถึงค่าความเร็วที่ต้องการตรวจจับ เพื่อให้โมเดลสามารถระบุและตรวจจับความเร็วของรถได้อย่างแม่นยำ
    การพัฒนาโปรแกรม ผู้วิจัยจะพัฒนาโปรแกรมเพื่อใช้งานร่วมกับ YOLOV8 ซึ่งจะสามารถแสดงผลลัพธ์ของการตรวจจับความเร็วในเวลาเฟรม (framerate) โดยทันที ทำให้การตรวจสอบความเร็วของรถเป็นไปอย่างรวดเร็วและมีประสิทธิภาพ
    การทดสอบและปรับปรุง ระบบจะถูกทดสอบในสภาวะการจราจรจริง เพื่อปรับปรุงประสิทธิภาพและความแม่นยำของการตรวจจับ การทดสอบในสถานการณ์จริง</p>
    <a href="/">MyHome</a>
    
   
  `);
});

// Research Plan route
app.get("/researchplan", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" type="text/css" href="/styles/style.css">
    </head>
    <body>
      <p>การตรวจจับความเร็วรถยนต์โดยใช้ YOLOV8 <br></p>
      <table>
      <caption>
        My Research Plan
      </caption>
      <tr>
        <th scope="col">การดำเนินงาน</th>
        <th scope="col">ระยะเวลาการดำเนินงานปี พ.ศ. 2566 - 2567 (เดือน)</th>
        <th scope="col">Status</th>
      </tr>
      <tr>
        <th scope="row">ศึกษาข้อมูลงานวิจัยที่เกี่ยวข้อง</th>
        <td>ก.ย.-ธ.ค.
65
</td>
        <td>Done</td>
      </tr>
      <tr>
        <th scope="row">ศึกษาสถาปัตยกรรม
ที่เกี่ยวข้องกับการตรวจจับวัตถุ
</th>
        <td>ม.ค.
-
มี.ค.
66
</td>
        <td>Done</td>
      </tr>
      <tr>
        <th scope="row">ศึกษาการใช้โปรแกรมideและภาษาpython</th>
        <td>เม.ษ.
-ธ.ค.
66

</td>
        <td>Done</td>
      </tr>
        <tr>
        <th scope="row">วิเคราะห์และหากระบวนการตรวจสอบความเร็วรถยนต์ผ่านโดยใช้ YOLO</th>
        <td>ม.ค.
-
มี.ค.
67
</td>
        <td>Done</td>
      </tr>
        <tr>
        <th scope="row">รวบรวมข้อมูลและวิเคราะห์ผลที่ได้ทั้งหมดแล้วสรุปผล</th>
        <td>เม.ษ.
-
มิ.ย.
67
</td>
  </td>
        <td>Done</td>
      </tr>
        <tr>
        <th scope="row">รวบรวมข้อมูลที่ได้ทั้งหมดจัดทำวิทสารนิพนธ์</th>
        <td>ก.ค.
-
ต.ค.
67

</td>
        <td>inprogress</td>
      </tr>
    </table>
    <a href="/">MyHome</a>
    </body>
    </html>
  `);
});

app.get("/rest/researchplan/", (req, res) => {
    const researchPlan = [
      {
        id: 1,
        description: "ศึกษาข้อมูลงานวิจัยที่เกี่ยวข้อง",
        startDate: "2023-10-01",
        endDate: "2023-10-31"
      },
      {
        id: 2,
        description: "ศึกษาสถาปัตยกรรมที่เกี่ยวข้องกับการตรวจจับวัตถุLiterature review",
        startDate: "2023-11-01",
        endDate: "2023-11-30"
      },
      {
        id: 3,
        description: "ศึกษาการใช้โปรแกรมideและภาษาpython",
        startDate: "2023-12-01",
        endDate: "2023-12-31"
      },
      {
        id: 4,
        description: "วิเคราะห์และหากระบวนการตรวจสอบความเร็วรถยนต์ผ่านโดยใช้ YOLO",
        startDate: "2024-01-01",
        endDate: "2024-01-31"
      },
      {
        id: 5,
        description: "รวบรวมข้อมูลและวิเคราะห์ผลที่ได้ทั้งหมดแล้วสรุปผล",
        startDate: "2024-02-01",
        endDate: "2024-02-15"
      },
      {
        id: 6,
        description: "รวบรวมข้อมูลที่ได้ทั้งหมดจัดทำสารนิพนธ์",
        startDate: "2024-02-16",
        endDate: "2024-03-31"
      },
      {
        id: 7,
        description: "ทดสอบการทำงานและบันทึกผล",
        startDate: "2024-04-01",
        endDate: "2024-04-30"
      },
      {
        id: 8,
        description: "ประเมินผล และ สรุป",
        startDate: "2024-05-01",
        endDate: "2024-05-31"
      }
    ];
  
    res.json(researchPlan);
  });

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});