function toggleContent() {
    const content = document.getElementById("fullContent");
    const btn = document.getElementById("toggleBtn");

    content.classList.toggle("hidden");

    if (content.classList.contains("hidden")) {
        btn.innerText = "Xem thêm ↓";
    } else {
        btn.innerText = "Thu gọn ↑";
    }
}

document.addEventListener('DOMContentLoaded', function () {

    const searchInput = document.getElementById('waste-search');
    const classifyBtn = document.getElementById('classify-btn');

    // ================= DATA =================
    const wasteData = [

        // ================= RECYCLABLE =================
        { name: "Chai nhựa", type: "recyclable", desc: "Rửa sạch, bỏ nắp, ép nhẹ.", main: ["chai nhựa", "chai nước", "chai", "nhựa"] },
        { name: "Lon nước ngọt", type: "recyclable", desc: "Rửa sạch, ép dẹt.", main: ["lon nước", "nước ngọt", "lon"] },
        { name: "Chai Lavie", type: "recyclable", desc: "Rửa sạch trước khi tái chế.", main: ["lavie"] },
        { name: "Chai Aquafina", type: "recyclable", desc: "Ép nhẹ trước khi bỏ.", main: ["aquafina"] },
        { name: "Chai Dasani", type: "recyclable", desc: "Có thể tái chế.", main: ["dasani"] },
        { name: "Chai Sting", type: "recyclable", desc: "Rửa sạch trước khi bỏ.", main: ["sting"] },
        { name: "Chai C2", type: "recyclable", desc: "Ép nhẹ trước khi tái chế.", main: ["c2"] },
        { name: "Chai trà xanh", type: "recyclable", desc: "Rửa sạch trước khi bỏ.", main: ["trà xanh"] },
        { name: "Chai Pepsi", type: "recyclable", desc: "Có thể tái chế.", main: ["chai pepsi"] },
        { name: "Chai Coca Cola", type: "recyclable", desc: "Rửa sạch trước khi tái chế.", main: ["chai coca"] },
        { name: "Lon Pepsi", type: "recyclable", desc: "Ép dẹt trước khi bỏ.", main: ["lon pepsi"] },
        { name: "Lon Coca Cola", type: "recyclable", desc: "Ép dẹt trước khi bỏ.", main: ["lon coca"] },
        { name: "Lon 7Up", type: "recyclable", desc: "Rửa sạch trước khi tái chế.", main: ["7up"] },
        { name: "Lon Sprite", type: "recyclable", desc: "Ép nhẹ sau khi dùng.", main: ["sprite"] },
        { name: "Lon Fanta", type: "recyclable", desc: "Có thể tái chế.", main: ["fanta"] },
        { name: "Lon Red Bull", type: "recyclable", desc: "Ép dẹt trước khi bỏ.", main: ["red bull"] },
        { name: "Lon Warrior", type: "recyclable", desc: "Rửa sạch trước khi tái chế.", main: ["warrior"] },
        { name: "Giấy A4", type: "recyclable", desc: "Giấy sạch, bỏ vào thùng tái chế.", main: ["giấy a4", "a4", "giấy in"] },
        { name: "Giấy nháp", type: "recyclable", desc: "Giấy sạch có thể tái chế.", main: ["giấy nháp"] },
        { name: "Giấy kiểm tra", type: "recyclable", desc: "Thu gom riêng giấy.", main: ["giấy kiểm tra"] },
        { name: "Giấy photo", type: "recyclable", desc: "Có thể tái chế.", main: ["giấy photo"] },
        { name: "Giấy note", type: "recyclable", desc: "Bỏ vào thùng giấy.", main: ["giấy note"] },
        { name: "Sách cũ", type: "recyclable", desc: "Có thể tái chế giấy.", main: ["sách cũ"] },
        { name: "Giáo trình cũ", type: "recyclable", desc: "Có thể tái chế hoặc quyên góp.", main: ["giáo trình"] },
        { name: "Hộp giấy carton", type: "recyclable", desc: "Giữ khô, ép gọn.", main: ["carton", "thùng giấy"] },
        { name: "Túi giấy", type: "recyclable", desc: "Không dính dầu mỡ.", main: ["túi giấy"] },
        { name: "Ống hút giấy", type: "recyclable", desc: "Có thể tái chế nếu sạch.", main: ["ống hút giấy"] },
        { name: "Can nhựa", type: "recyclable", desc: "Rửa sạch.", main: ["can", "can nhựa"] },
        { name: "Nắp chai nhựa", type: "recyclable", desc: "Thu gom riêng.", main: ["nắp chai"] },
        { name: "Bao bì nhựa cứng", type: "recyclable", desc: "Rửa sạch.", main: ["bao bì nhựa"] },
    
        // ================= ORGANIC =================
        { name: "Vỏ chuối", type: "organic", desc: "Bỏ vào thùng hữu cơ để ủ phân.", main: ["chuối", "vỏ chuối"] },
        { name: "Vỏ chuối chín", type: "organic", desc: "Có thể ủ compost.", main: ["chuối chín"] },
        { name: "Vỏ chuối xanh", type: "organic", desc: "Có thể phân hủy.", main: ["chuối xanh"] },
        { name: "Vỏ táo", type: "organic", desc: "Có thể ủ phân.", main: ["táo", "vỏ táo"] },
        { name: "Vỏ táo đỏ", type: "organic", desc: "Ủ compost.", main: ["táo đỏ"] },
        { name: "Vỏ táo xanh", type: "organic", desc: "Có thể ủ phân.", main: ["táo xanh"] },
        { name: "Vỏ cam", type: "organic", desc: "Bỏ vào thùng hữu cơ.", main: ["cam", "quýt", "vỏ cam"] },
        { name: "Vỏ cam sành", type: "organic", desc: "Ủ phân hữu cơ.", main: ["cam sành"] },
        { name: "Vỏ cam ngọt", type: "organic", desc: "Có thể phân hủy.", main: ["cam ngọt"] },
        { name: "Vỏ dưa hấu", type: "organic", desc: "Ủ compost.", main: ["dưa hấu"] },
        { name: "Vỏ xoài", type: "organic", desc: "Ủ phân.", main: ["xoài"] },
        { name: "Vỏ dứa", type: "organic", desc: "Ủ compost.", main: ["dứa"] },
        { name: "Cơm thừa", type: "organic", desc: "Đậy kín tránh ruồi.", main: ["cơm", "cơm thừa"] },
        { name: "Cơm chiên thừa", type: "organic", desc: "Có thể phân hủy.", main: ["cơm chiên"] },
        { name: "Rau thừa", type: "organic", desc: "Phân hủy nhanh.", main: ["rau"] },
        { name: "Rau cải thừa", type: "organic", desc: "Ủ compost.", main: ["rau cải"] },
        { name: "Rau muống thừa", type: "organic", desc: "Có thể phân hủy.", main: ["rau muống"] },
        { name: "Bã cà phê", type: "organic", desc: "Ủ phân tốt.", main: ["cà phê"] },
        { name: "Bã cà phê đen", type: "organic", desc: "Có thể ủ compost.", main: ["cà phê đen"] },
        { name: "Bã cà phê sữa", type: "organic", desc: "Ủ phân tốt.", main: ["cà phê sữa"] },
        { name: "Vỏ trứng", type: "organic", desc: "Giàu canxi.", main: ["trứng"] },
        { name: "Xương cá", type: "organic", desc: "Phân hủy chậm.", main: ["xương cá"] },
        { name: "Xương gà", type: "organic", desc: "Có thể ủ.", main: ["xương gà"] },
        { name: "Hoa héo", type: "organic", desc: "Phân hủy tự nhiên.", main: ["hoa"] },
        { name: "Lá cây", type: "organic", desc: "Có thể ủ phân.", main: ["lá", "lá cây"] },
        { name: "Lá khô", type: "organic", desc: "Ủ phân.", main: ["lá khô"] },
    
        // ================= RESIDUAL =================
        { name: "Pin cũ", type: "residual", desc: "Chứa kim loại nặng, cần xử lý riêng.", main: ["pin", "pin cũ"] },
        { name: "Pin AA cũ", type: "residual", desc: "Cần xử lý riêng.", main: ["pin aa"] },
        { name: "Pin AAA cũ", type: "residual", desc: "Chứa kim loại nặng.", main: ["pin aaa"] },
        { name: "Pin laptop hỏng", type: "residual", desc: "Rác điện tử.", main: ["pin laptop"] },
        { name: "Pin điện thoại hỏng", type: "residual", desc: "Không bỏ chung rác thường.", main: ["pin điện thoại"] },
        { name: "Khẩu trang", type: "residual", desc: "Có nguy cơ sinh học.", main: ["khẩu trang", "mặt nạ"] },
        { name: "Khẩu trang y tế", type: "residual", desc: "Không tái chế.", main: ["khẩu trang y tế"] },
        { name: "Khăn giấy bẩn", type: "residual", desc: "Không tái chế.", main: ["khăn giấy"] },
        { name: "Giấy vệ sinh", type: "residual", desc: "Không tái chế.", main: ["giấy vệ sinh", "toilet paper"] },
        { name: "Bỉm", type: "residual", desc: "Không tái chế.", main: ["tã", "bỉm"] },
        { name: "Ống tiêm", type: "residual", desc: "Nguy hiểm sinh học.", main: ["ống tiêm"] },
        { name: "Vỏ snack", type: "residual", desc: "Nhựa nhiều lớp.", main: ["snack"] },
        { name: "Bao bì mì gói", type: "residual", desc: "Khó tái chế.", main: ["mì gói"] },
        { name: "Ly giấy bẩn", type: "residual", desc: "Không tái chế khi dính thực phẩm.", main: ["ly giấy bẩn"] },
        { name: "Bàn chải đánh răng", type: "residual", desc: "Nhựa hỗn hợp.", main: ["bàn chải"] },
        { name: "Đĩa CD", type: "residual", desc: "Khó tái chế.", main: ["cd"] },
        { name: "Adapter hỏng", type: "residual", desc: "Rác điện tử.", main: ["adapter"] },
        { name: "Tai nghe hỏng", type: "residual", desc: "Rác điện tử.", main: ["tai nghe"] },
        { name: "Tai nghe Bluetooth hỏng", type: "residual", desc: "Khó tái chế.", main: ["tai nghe bluetooth"] },
        { name: "Chuột máy tính hỏng", type: "residual", desc: "Thiết bị điện tử.", main: ["chuột máy tính"] },
        { name: "Bàn phím cơ hỏng", type: "residual", desc: "Rác điện tử.", main: ["bàn phím cơ"] },
        { name: "USB hỏng", type: "residual", desc: "Không tái chế thông thường.", main: ["usb"] },
        { name: "Dây sạc hỏng", type: "residual", desc: "Rác điện tử.", main: ["dây sạc"] },
        { name: "Đèn huỳnh quang", type: "residual", desc: "Chứa thủy ngân.", main: ["đèn", "huỳnh quang"] },
        { name: "Bóng đèn LED", type: "residual", desc: "Không tái chế thường.", main: ["đèn led"] },
        { name: "Bóng đèn sợi đốt", type: "residual", desc: "Bỏ riêng.", main: ["đèn sợi đốt"] },
    
    ];

    // ================= DOM =================
    const cards = {
        recyclable: document.getElementById('recyclable-card'),
        organic: document.getElementById('organic-card'),
        residual: document.getElementById('residual-card')
    };

    const icons = {
        recyclable: document.getElementById('recyclable-icon'),
        organic: document.getElementById('organic-icon'),
        residual: document.getElementById('residual-icon')
    };

    // ================= RESET =================
    function resetAll() {

        Object.values(cards).forEach(card => {
            card.classList.remove('active');
        });

        Object.values(icons).forEach(icon => {

            icon.classList.remove(
                'active-recyclable',
                'active-organic',
                'active-residual',
                'bg-primary-container',
                'text-on-primary-container',
                'bg-tertiary-container',
                'text-on-tertiary-container',
                'bg-error-container',
                'text-on-error-container'
            );

            icon.classList.add(
                'bg-surface-container-highest',
                'text-outline'
            );
        });

        removeResult();
    }

    // ================= ACTIVE CARD =================
    function activateCard(category) {

        const card = cards[category];
        const icon = icons[category];

        if (!card || !icon) return;

        card.classList.add('active');

        if (category === 'recyclable') {

            icon.classList.add(
                'bg-primary-container',
                'text-on-primary-container',
                'active-recyclable'
            );

        } else if (category === 'organic') {

            icon.classList.add(
                'bg-tertiary-container',
                'text-on-tertiary-container',
                'active-organic'
            );

        } else {

            icon.classList.add(
                'bg-error-container',
                'text-on-error-container',
                'active-residual'
            );
        }
    }

    // ================= FIND ITEM =================
    function findWasteItem(input) {

        input = input.toLowerCase();

        for (let item of wasteData) {

            for (let keyword of item.main) {

                if (input.includes(keyword)) {
                    return item;
                }
            }
        }

        return null;
    }

    // ================= LABEL =================
    function getLabel(type) {

        if (type === 'recyclable') {
            return "Tái chế ♻️";
        }

        if (type === 'organic') {
            return "Hữu cơ 🌱";
        }

        return "Rác vô cơ ⚠️";
    }

    // ================= SHOW RESULT =================
    function showResult(item) {

        removeResult();

        const resultDiv = document.createElement('div');

        resultDiv.id = "result-box";

        resultDiv.className =
            "mt-10 p-6 rounded-xl bg-surface-container shadow-lg text-center animate-fadeIn";

        resultDiv.innerHTML = `
            <h3 class="text-2xl font-bold mb-2">
                ${item.name}
            </h3>

            <p class="text-on-surface-variant mb-2">
                ${item.desc}
            </p>

            <span class="font-semibold text-primary">
                Phân loại: ${getLabel(item.type)}
            </span>
        `;

        document.querySelector('section.relative')
            .appendChild(resultDiv);
    }

    // ================= INVALID RESULT =================
    function showInvalidResult(input) {

        removeResult();

        const resultDiv = document.createElement('div');

        resultDiv.id = "result-box";

        // UI đẹp hơn + dễ nhìn hơn
        resultDiv.className =
            "mt-10 p-6 rounded-2xl border border-red-300 bg-red-50 shadow-xl text-center animate-fadeIn";

        resultDiv.innerHTML = `
        <div class="flex flex-col items-center gap-3">

            <div class="text-5xl">
                ⚠️
            </div>

            <h3 class="text-2xl font-bold text-red-600">
                Không tìm thấy
            </h3>

            <p class="text-gray-700 text-lg">
                "${input}" không tồn tại trong hệ thống phân loại rác.
            </p>

        </div>
    `;

        document.querySelector('section.relative')
            .appendChild(resultDiv);
    }

    // ================= REMOVE RESULT =================
    function removeResult() {

        const old = document.getElementById('result-box');

        if (old) {
            old.remove();
        }
    }

    // ================= MAIN =================
    function classifyWaste() {

        const inputVal = searchInput.value.trim();

        // INPUT RỖNG
        if (!inputVal) {

            resetAll();

            showInvalidResult("Bạn chưa nhập dữ liệu");

            return;
        }

        const item = findWasteItem(inputVal);

        // TÌM THẤY
        if (item) {

            resetAll();

            activateCard(item.type);

            showResult(item);

            // SAVE SERVER
            fetch("http://localhost:3000/save", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    item: item.name,
                    category: item.type
                })

            })
                .then(res => res.text())
                .then(data => console.log("SERVER:", data))
                .catch(err => console.error("ERROR:", err));

        } else {

            resetAll();

            showInvalidResult(inputVal);
        }
    }

    // ================= EVENTS =================
    classifyBtn.addEventListener('click', classifyWaste);

    searchInput.addEventListener('keypress', function (e) {

        if (e.key === 'Enter') {
            classifyWaste();
        }
    });

    // QUICK SEARCH
    window.quickSearch = function (term) {

        searchInput.value = term;

        classifyWaste();
    };

    // INIT
    resetAll();
});

// ================= MOBILE MENU =================
const toggle = document.getElementById("menu-toggle");

const menu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});