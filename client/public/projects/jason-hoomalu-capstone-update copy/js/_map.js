$(() => {

    class ArrayConverter {
        constructor(width, height, content = (x, y) => undefined) {
            this.mapX = width;
            this.mapY = height;
            this.map = [];
            for (let y = 0; y < this.mapY; y++) {
                for (let x = 0; x < this.mapX; x++) {
                    this.map[y * this.mapX + x] = content(x, y);
                }
            }
        }
    }

    function convertToArray() {
        const tilesArr = $('.tile-map .tile').map(function () {
            return {
                id: parseInt($(this).attr('data-tile-id')),
                left: parseInt($(this).css('left')) / 50,
                top: parseInt($(this).css('top')) / 50
            };
        }).toArray();
        tilesArr.sort((a, b) => {
            return a.top - b.top;
        });
        const height = tilesArr[tilesArr.length - 1].top + 1;
        tilesArr.sort((a, b) => {
            return a.left - b.left;
        });
        const width = tilesArr[tilesArr.length - 1].left + 1;
        const convertedMap = new ArrayConverter(width, height, (x, y) => {
            let val = tilesArr.filter(e => e.left === x && e.top === y);
            return val.length === 0 ? 1 : val.length === 1 ? val[0].id : `[${val.map(e => e.id).join(', ') }]`;
        });
        $('#tile-array').val(`[${convertedMap.map.join(', ') }]`);
    }

    function convertToMap() {
        const mapId = parseInt($('#tile-array').val());
        const mapCurrent = tileMaps.findById(mapId);
        $('.tile-map').empty();
        mapCurrent.map.forEach((e, i) => {
            const x = getX(i);
            const y = getY(i);
            if (Array.isArray(e)) {
                e.forEach(f => renderTile(f, x, y));
            } else {
                renderTile(e, x, y);
            }
        });

        function renderTile(tile, x, y) {
            getTile(tileData.findById(tile))
                .addClass('position-absolute')
                .css({
                    left: x * 50 + 'px',
                    top: y * 50 + 'px'
                })
                .appendTo($('.tile-map'));
        }
        function getX(index) {
            return index % mapCurrent.mapX;
        }
        function getY(index) {
            return Math.floor(index / mapCurrent.mapX);
        }
    }


    function getTile(e) {
        return $('<img></img>').attr({
            src: tileData.getSrcById(e.id),
            'data-tile-id': e.id
        }).addClass('tile');
    }

let selectedTileId
    function renderTileOptions() {
        $tileOptions = $('.tile-options');
        tileData.tiles.forEach(e => {
          if (e.src.includes("npc")) {
            $(".tile-npc").append(getTile(e)
                .addClass('tile tile-option')
                .click(function () {
                  selectedTileId = this.getAttribute("data-tile-id")
                  $("#base-tile").val(selectedTileId)
                }));
          } else if (e.src.includes("landscape")) {
            $tileOptions.append(getTile(e)
                .addClass('tile tile-option')
                .click(function () {
                  selectedTileId = this.getAttribute("data-tile-id")
                  $("#base-tile").val(selectedTileId)
                }));
          } else if (e.src.includes("monarch")) {
            $(".tile-monarch").append(getTile(e)
                .addClass('tile tile-option')
                .click(function () {
                  selectedTileId = this.getAttribute("data-tile-id")
                  $("#base-tile").val(selectedTileId)
                }));
          }
        });
    }


    function getOffset(event) {
        const $tileMap = $('.tile-map');
        let x = event.pageX - $tileMap.offset().left;
        let y = event.pageY - $tileMap.offset().top;
        x -= Math.abs(x) % 50;
        y -= Math.abs(y) % 50;
        return { left: x, top: y };
    }


    function initEventListeners() {

        $('.tile-options').on('click', '.tile-option', function () {
            $(event.target).toggleClass('selected border-blue');
            $('.selected').not($(event.target)).toggleClass('selected border-blue');
        });
          $('.tile-npc').on('click', '.tile-option', function () {
            $(event.target).toggleClass('selected border-blue');
            $('.selected').not($(event.target)).toggleClass('selected border-blue');
        });
          $('.tile-monarch').on('click', '.tile-option', function () {
            $(event.target).toggleClass('selected border-blue');
            $('.selected').not($(event.target)).toggleClass('selected border-blue');
        });
        

        $('.tile-map').on('click', '.tile', function () {
            if ($(event.target).hasClass('selected') || $('.selected').length === 0) {
                $(event.target).toggleClass('selected border-blue');
            }
        });

        $('.tile-map').click(function () {
            const offset = getOffset(event);
            $('.tile-map .selected').css(offset);
            $('.tile-options .selected').clone().css(offset)
                .addClass('position-absolute')
                .removeClass('tile-option selected border-blue')
                .appendTo($('.tile-map'));
            $('.tile-npc .selected').clone().css(offset)
                .addClass('position-absolute')
                .removeClass('tile-option selected border-blue')
                .appendTo($('.tile-map'));
            $('.tile-monarch .selected').clone().css(offset)
                .addClass('position-absolute')
                .removeClass('tile-option selected border-blue')
                .appendTo($('.tile-map'));
        });

        $(window).on('keydown', (event) => {
            const $selected = $('.tile-map .selected');
            if (event.which === 8 && $selected.length > 0) {
                $selected.remove();
            }
        });
        $('#btn-convert-array').click(convertToArray);
        $('#btn-convert-map').click(convertToMap);
    }


    function init() {
        renderTileOptions();
        initEventListeners();
    }
    init();

});

function baseGenerator() {
let baseArray = []
  let x = parseInt($("#base-x").val())
  let y = parseInt($("#base-y").val())
  let tileId = parseInt($("#base-tile").val())
  num = x * y;
  console.log(x,y,tileId,num)
  while (num > 0) {
  baseArray.push(tileId)
  num--
  }
 tileMaps.levels[0].map = baseArray
 tileMaps.levels[0].mapX = x
 tileMaps.levels[0].mapY = y
 $("#tile-array").val(0)
 $("#btn-convert-map").click()
}

$("#place-base").on("click", baseGenerator)


