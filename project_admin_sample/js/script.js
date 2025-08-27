$(document).ready(function () {
    //  사이드바 아코디언
    $(".sideBar_menu li button").on('click',function (e) { 
        $(this).next(".sideBar_menu_sub").stop().slideToggle(200);
        $(this).stop().toggleClass("active");
    });
    // 프로필 메뉴 드롭다운
    $(".profile_name").on('click',function (e) { 
        $(this).next(".profile_drop").stop().slideToggle(200);
        $(this).stop().toggleClass("active");
    });

    // sub01 리스트 체크박스
    //각각의 테이블에 적용
    $(".order_table").each(function () {
        const $thisTable = $(this); // 현재 테이블

        // sub01 리스트 체크박스 전체선택
        $thisTable.find('.select_all').on('change', function () {
            const isChecked = $(this).is(':checked');
            $thisTable.find('.select_item').prop('checked', isChecked);
        });

        // 개별 체크박스 하나라도 해제하면 전체선택도 해제
        $thisTable.find('.select_item').on('change', function () {
            const $items = $thisTable.find('.select_item');
            const $checked = $items.filter(':checked');

            $thisTable.find('.select_all').prop('checked', $items.length === $checked.length);
        });
    });

    // sub01 리스트 더보기 버튼 클릭 시 숨겨진 리스트 추가
    $(".more").on('click', function () {
        const $more = $(this);
        const $table = $more.prev(".order_table");
        const $hidden = $table.find("tbody.hidden");
    
        $hidden.stop().slideToggle("fast");
        $more.toggleClass("active");
    
        // 버튼 텍스트/아이콘 변경
        $button.text($button.hasClass('active') ? '접기' : '더보기');
    
    });

    // sub01 리스트 삭제/복구하기
    const orderCons = document.querySelectorAll(".order_con");

    orderCons.forEach((orderCon) => {
        const table = orderCon.querySelector(".order_table");
        const selectAll = table.querySelector("thead .select_all");
        const deleteBtn = orderCon.querySelector(".order_d");
        const editBtn = orderCon.querySelector(".order_e");
        

        // 선택한 리스트 삭제하기 (order_d 버튼 클릭) 
        deleteBtn.addEventListener("click", () => {
            const checked = table.querySelectorAll("tbody input[type='checkbox']:checked");

            checked.forEach((checkbox) => {
                const tr = checkbox.closest("tr");
                tr.classList.add("hiddenRow"); //히든 처리 클래스 부여
                checkbox.checked = false; // 삭제 전 개별선택 해제하여 전체선택 인식 안되게
            });
            if(selectAll) selectAll.checked = false; //전체선택 해제
            
            // 모든 리스트가 삭제되면 경고 띄우기 (화면에서 삭제된 리스트 사라지게 1초 딜레이)
            setTimeout(() => { 
                const visibleRows = table.querySelectorAll("tbody tr:not(.hiddenRow)");
                if (visibleRows.length === 0) {
                    alert("모든 항목이 삭제되었습니다!\n삭제 버튼 옆의 버튼을 누르면 복구됩니다:)");
                }
            },10);
        });
        // 삭제한 리스트 복구하기 (order_e 버튼 클릭) 
        editBtn.addEventListener("click", () => {
            const hiddenRow = table.querySelectorAll(".hiddenRow");
            hiddenRow.forEach((tr) => {
                tr.classList.remove("hiddenRow"); //다시 보이게
            });
        });
        
    });
    
    
    

    
    
    

});
